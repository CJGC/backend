/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.examsapp.service;

import co.edu.utp.isc.gia.examsapp.data.entity.Question;
import co.edu.utp.isc.gia.examsapp.data.repository.QuestionRepository;
import co.edu.utp.isc.gia.examsapp.validators.QuestionValidator;
import co.edu.utp.isc.gia.examsapp.web.dto.OpenQuestionDto;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Christhian Gomez
 */
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final ModelMapper modelMapper;
    private final QuestionValidator questionValidator;
    
    public QuestionService(
            QuestionRepository questionRepository,
            ModelMapper modelMapper,
            QuestionValidator questionValidator) {
        this.questionRepository = questionRepository;
        this.modelMapper = modelMapper;
        this.questionValidator = questionValidator;
    }
    
    public OpenQuestionDto save(OpenQuestionDto questionDto) throws Exception {        
        try {
            this.questionValidator.setQuestion(questionDto);
            this.questionValidator.setExceptions("");
            this.questionValidator.performValidationsExcept("id");
            String questionExceptions = this.questionValidator.getExceptions();
            
            if (questionExceptions.length() > 0) {
                throw new IOException(questionExceptions);
            }
            
            Question question = modelMapper.map(questionDto, Question.class);
            question = questionRepository.save(question);
            
            if (question != null) {
                return modelMapper.map(question, OpenQuestionDto.class);                
            } else {
                return null;
            }

        }
        catch(Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }

    @SuppressWarnings("null")
    private Boolean isAValidImageFile(MultipartFile image) {
        String dataType;
        dataType = image.getContentType().substring(0, 
                image.getContentType().indexOf("/"));
        return (!image.isEmpty() && dataType.equals("image"));
    }
    
    private void makeDirectory(File resourcesDir) {
        if (!resourcesDir.exists()) {
            resourcesDir.mkdir();
        }
    }
    
    public String saveImage(MultipartFile image) throws Exception {        
        try {

            if (!isAValidImageFile(image)) {
                throw new Exception("Invalid data type file or empty file");
            }

            String imageName = image.getOriginalFilename();
            File resourcesDir = new File("resources");
            makeDirectory(resourcesDir);

            // build route where File is.
            Path fileRoute = Paths.get(resourcesDir.toURI()).
                    resolve(imageName).toAbsolutePath();
            
            // try to load file
            File existFile = new File(fileRoute.toString());
            
            // check if file exist, if not create the file
            if (!existFile.exists()) {
                Files.copy(image.getInputStream(), fileRoute);
                return imageName;                    
            } else {
                return imageName;
            }
            
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }
    
    public byte[] uploadImage(String imageName) throws Exception {
        try {
            File resourcesDir = new File("resources");

            // build route where File is.
            Path fileRoute = Paths.get(resourcesDir.toURI()).
                    resolve(imageName).toAbsolutePath();

            // try to load file
            File file = new File(fileRoute.toString());

            // check if file exist, if not create the file
            if (!file.exists()) {
                throw new Exception("Invalid route or file does not exist");                   
            } else {
                return Files.readAllBytes(fileRoute);
            }
        }
        catch (Exception e) {
            System.out.print(e.getMessage());
            throw e;
        }
    }
    
    public String deleteImage(String imageName) throws Exception {        
        try {

            File resourcesDir = new File("resources");

            // build route where File is.
            Path fileRoute = Paths.get(resourcesDir.toURI()).
                    resolve(imageName).toAbsolutePath();

            Files.deleteIfExists(fileRoute);
            return imageName;            
        }
        catch(IOException e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }
    
     public List<OpenQuestionDto> listAll() throws Exception {
        ArrayList<Question> questions = new ArrayList<>();
        questionRepository.findAll().forEach(questions::add);
        
        List<OpenQuestionDto> openQuestionDto = new ArrayList<>();
        questions.forEach(question -> {
            openQuestionDto.add(modelMapper.map(question, OpenQuestionDto.class));
        });
        return openQuestionDto;
    }
    
    public List<OpenQuestionDto> findByExam(Long id) throws Exception {
        try {
            List<OpenQuestionDto> questionsDto = new ArrayList<>();
            List<Question> questions = questionRepository.findByExamId(id);
            if (questions != null) {
                questions.forEach( question -> {
                    questionsDto.add(modelMapper.map(question, OpenQuestionDto.class));
                });
                return questionsDto;
            } else {
                return null;
            }
        }
        catch(Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }
    
    public OpenQuestionDto update(OpenQuestionDto questionDto) throws Exception {
        try {
            this.questionValidator.setQuestion(questionDto);
            this.questionValidator.setExceptions("");
            this.questionValidator.performValidations();
            String questionExceptions = this.questionValidator.getExceptions();
            
            if (questionExceptions.length() > 0) {
                throw new IOException(questionExceptions);
            }
            
            Question question = modelMapper.map(questionDto, Question.class);
            question = questionRepository.save(question);
            
            if (question != null) {
                return modelMapper.map(question, OpenQuestionDto.class);                
            } else {
                return null;
            }
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            throw e;
        }
    }
    
    public String delete(Long id) throws Exception {
        
        try {
            questionRepository.deleteById(id);
            return "Question deleted successfully";
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            throw e;
        }
    }  
}
