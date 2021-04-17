/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.examsapp.web.dto.abstractdto;

import co.edu.utp.isc.gia.examsapp.web.dto.ExamDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

/**
 *
 * @author CJ
 */
@AllArgsConstructor 
@NoArgsConstructor
@Setter @Getter
@SuperBuilder()
public abstract class QuestionDto {
    
    private Long id;
    private String type;
    private Double weight;
    private String description;
    private String questionImage;
    private ExamDto exam;
}
