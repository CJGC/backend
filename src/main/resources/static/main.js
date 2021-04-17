(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/nTU":
/*!****************************************************************************!*\
  !*** ./src/app/Componentes/ans-opts-details/ans-opts-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: AnsOptsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnsOptsDetailsComponent", function() { return AnsOptsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _pipes_correctAns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/correctAns */ "P/bm");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/weight.pipe */ "rMaZ");







function AnsOptsDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Is correct answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnsOptsDetailsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "correctAns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ansOpt_r2.correctAnswer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ansOpt_r2.weight));
} }
class AnsOptsDetailsComponent {
    constructor(conf) {
        this.ansOpts = conf.data;
    }
    ngOnInit() {
    }
}
AnsOptsDetailsComponent.ɵfac = function AnsOptsDetailsComponent_Factory(t) { return new (t || AnsOptsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"])); };
AnsOptsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnsOptsDetailsComponent, selectors: [["app-ans-opts-details"]], decls: 3, vars: 3, consts: [["sortMode", "multiple", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"]], template: function AnsOptsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnsOptsDetailsComponent_ng_template_1_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnsOptsDetailsComponent_ng_template_2_Template, 9, 7, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.ansOpts)("paginator", true)("rows", 10);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], pipes: [_pipes_correctAns__WEBPACK_IMPORTED_MODULE_4__["correctAnswerPipe"], _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_5__["WeightPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnMtb3B0cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnsOptsDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ans-opts-details',
                templateUrl: './ans-opts-details.component.html',
                styleUrls: ['./ans-opts-details.component.css']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Exam app\examsapp\src\main.ts */"zUnb");


/***/ }),

/***/ "0p9f":
/*!**********************************************************************************************!*\
  !*** ./src/app/Componentes/exam-studen-open-response/exam-studen-open-response.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ExamStudenOpenResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudenOpenResponseComponent", function() { return ExamStudenOpenResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dto_OpenResponseDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/OpenResponseDto */ "x/Fh");
/* harmony import */ var src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/open-response.service */ "pj9s");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/exam-student.service */ "qIA5");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");











class ExamStudenOpenResponseComponent {
    constructor(openResponseService, dynamicDialogConfig, dynamicDialogRef, formBuilder, examStudentService) {
        this.openResponseService = openResponseService;
        this.dynamicDialogConfig = dynamicDialogConfig;
        this.dynamicDialogRef = dynamicDialogRef;
        this.formBuilder = formBuilder;
        this.examStudentService = examStudentService;
        this.gradeForm = this.formBuilder.group({
            grade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0.0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5.0)]],
            content: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.selectedQuestion = this.dynamicDialogConfig.data.selectedQuestion;
        this.examStudent = this.dynamicDialogConfig.data.examStudent;
        this.openResponse = new src_app_dto_OpenResponseDto__WEBPACK_IMPORTED_MODULE_2__["OpenResponseDto"];
    }
    ngOnInit() {
        this.getOpenResponse();
    }
    getOpenResponse() {
        this.openResponseService.getOpenResponsesByExamStudentAndQuestion(this.examStudent.id, this.selectedQuestion.id).subscribe(openResponse => {
            this.openResponse = openResponse;
            this.gradeForm.setValue({
                grade: this.openResponse.valoration,
                content: openResponse.content
            });
        }, error => console.log(error));
    }
    getInfoFromGradeForm() {
        let gradeFormContent = this.gradeForm.value;
        this.openResponse.valoration = gradeFormContent.grade;
    }
    updateOpenResponse() {
        this.openResponseService.updateOpenResponse(this.openResponse).subscribe(openResponse => openResponse, error => console.log(error));
    }
    updateExamStuden() {
        this.examStudentService.updateExamStudent(this.examStudent).subscribe(examStudent => {
            this.examStudent = examStudent;
            this.dynamicDialogRef.close(this.examStudent);
        }, error => {
            console.log(error);
            this.dynamicDialogRef.close();
        });
    }
    calculateNewExamStudentDefinitiveGrade() {
        this.examStudent.definitiveGrade += this.selectedQuestion.weight * this.openResponse.valoration;
    }
    grade() {
        this.getInfoFromGradeForm();
        this.updateOpenResponse();
        this.calculateNewExamStudentDefinitiveGrade();
        this.updateExamStuden();
    }
    cancel() {
        this.dynamicDialogRef.close();
    }
}
ExamStudenOpenResponseComponent.ɵfac = function ExamStudenOpenResponseComponent_Factory(t) { return new (t || ExamStudenOpenResponseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_3__["OpenResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_5__["ExamStudentService"])); };
ExamStudenOpenResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamStudenOpenResponseComponent, selectors: [["app-exam-studen-open-response"]], decls: 23, vars: 13, consts: [[3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-12"], ["pInputTextarea", "", "formControlName", "content", 3, "rows", "autoResize"], ["for", "grade"], ["id", "grade", "mode", "decimal", "formControlName", "grade", 3, "max", "min", "step", "minFractionDigits", "maxFractionDigits"], [1, "p-field", "p-col-12", "p-md-6"], ["icon", "pi pi-pencil", "label", "Grade", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "Cancel", 1, "p-button-secondary", 3, "click"]], template: function ExamStudenOpenResponseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Question description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Question weight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p-inputNumber", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamStudenOpenResponseComponent_Template_p_button_click_20_listener() { return ctx.grade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamStudenOpenResponseComponent_Template_p_button_click_22_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedQuestion.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedQuestion.weight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.examStudent.student.name, " ", ctx.examStudent.student.lastname, " response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.gradeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 4)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5)("min", 0)("step", 0.01)("minFractionDigits", 1)("maxFractionDigits", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.gradeForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__["InputTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__["InputNumber"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXN0dWRlbi1vcGVuLXJlc3BvbnNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamStudenOpenResponseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-studen-open-response',
                templateUrl: './exam-studen-open-response.component.html',
                styleUrls: ['./exam-studen-open-response.component.css']
            }]
    }], function () { return [{ type: src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_3__["OpenResponseService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_5__["ExamStudentService"] }]; }, null); })();


/***/ }),

/***/ "1aR0":
/*!************************************************************************************!*\
  !*** ./src/app/Componentes/exam-grade-main-view/exam-grade-main-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExamGradeMainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamGradeMainViewComponent", function() { return ExamGradeMainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var src_app_dto_ProfessorDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/ProfessorDto */ "TuCJ");
/* harmony import */ var src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/exam.service */ "zZNt");
/* harmony import */ var src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Professor.service */ "utYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");










function ExamGradeMainViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamGradeMainViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Durability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Max grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamGradeMainViewComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamGradeMainViewComponent_ng_template_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const exam_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.grade(exam_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r4.durability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r4.maxGrade);
} }
class ExamGradeMainViewComponent {
    constructor(examService, professorService, router) {
        this.examService = examService;
        this.professorService = professorService;
        this.router = router;
        this.professor = new src_app_dto_ProfessorDto__WEBPACK_IMPORTED_MODULE_2__["ProfessorDto"];
        this.exams = new Array();
        this.selectedExam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_1__["ExamDto"];
        this.seeingStudentAns = false;
    }
    ngOnInit() {
        this.setProfessor();
    }
    setProfessor() {
        this.professorService.getByUsername("professor").subscribe(professor => {
            this.professor = professor;
            this.setExams();
        }, error => console.log(error));
    }
    setExams() {
        this.examService.getExamByProfessor(this.professor.id).subscribe(exams => this.exams = exams, error => console.log(error));
    }
    grade(selectedExam) {
        this.selectedExam = selectedExam;
        this.router.navigate(['professor-main-view/exam-students-view', { examId: selectedExam.id }]);
    }
}
ExamGradeMainViewComponent.ɵfac = function ExamGradeMainViewComponent_Factory(t) { return new (t || ExamGradeMainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_3__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_4__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ExamGradeMainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamGradeMainViewComponent, selectors: [["app-exam-grade-main-view"]], decls: 5, vars: 3, consts: [[3, "value", "paginator", "rows"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "table-header"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "durability"], ["field", "durability"], ["pSortableColumn", "maxGrade"], ["field", "maxGrade"], ["pButton", "", "type", "button", "icon", "pi pi-star-o", 1, "p-button-text", 3, "click"]], template: function ExamGradeMainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamGradeMainViewComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamGradeMainViewComponent_ng_template_3_Template, 12, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamGradeMainViewComponent_ng_template_4_Template, 9, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.exams)("paginator", true)("rows", 10);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["SortIcon"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLWdyYWRlLW1haW4tdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamGradeMainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-grade-main-view',
                templateUrl: './exam-grade-main-view.component.html',
                styleUrls: ['./exam-grade-main-view.component.css']
            }]
    }], function () { return [{ type: src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_3__["ExamService"] }, { type: src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_4__["ProfessorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "3USH":
/*!**********************************************************************************!*\
  !*** ./src/app/Componentes/professor-main-view/professor-main-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfessorMainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorMainViewComponent", function() { return ProfessorMainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _professor_interaction_professor_interaction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../professor-interaction/professor-interaction.component */ "bOhx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ProfessorMainViewComponent {
    constructor() {
        this.display = false;
        this.barMenuItems = [{
                icon: 'pi pi-bars',
                command: (event) => {
                    this.display = true;
                }
            }];
    }
    ngOnInit() {
    }
    setDisplay(display) {
        this.display = display;
    }
}
ProfessorMainViewComponent.ɵfac = function ProfessorMainViewComponent_Factory(t) { return new (t || ProfessorMainViewComponent)(); };
ProfessorMainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorMainViewComponent, selectors: [["app-professor-main-view"]], decls: 5, vars: 2, consts: [[3, "model"], ["pButton", "", "label", "Logout", "icon", "pi pi-power-off"], [3, "display", "tellAboutDisplay"]], template: function ProfessorMainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-professor-interaction", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tellAboutDisplay", function ProfessorMainViewComponent_Template_app_professor_interaction_tellAboutDisplay_3_listener($event) { return ctx.setDisplay($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.barMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.display);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_1__["Menubar"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], _professor_interaction_professor_interaction_component__WEBPACK_IMPORTED_MODULE_3__["ProfessorInteractionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzb3ItbWFpbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorMainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-professor-main-view',
                templateUrl: './professor-main-view.component.html',
                styleUrls: ['./professor-main-view.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5NrR":
/*!***********************************!*\
  !*** ./src/app/dto/StudentDto.ts ***!
  \***********************************/
/*! exports provided: StudentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDto", function() { return StudentDto; });
class StudentDto {
    constructor() {
        this.id = 0;
        this.identificationCard = "";
        this.name = "";
        this.lastname = "";
    }
}


/***/ }),

/***/ "6Baw":
/*!*******************************************************!*\
  !*** ./src/app/services/selected-response.service.ts ***!
  \*******************************************************/
/*! exports provided: SelectedResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedResponseService", function() { return SelectedResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SelectedResponseService {
    constructor(http) {
        this.http = http;
    }
    getSelectedResponses() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'selectedResponse/all');
    }
    getSelectedResponseByExamStudentAndQuestion(examStudentId, ansOptId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL +
            'selectedResponse/byexamstudentandquestion/?examStudentId=' + examStudentId + '&ansOptId=' + ansOptId);
    }
    saveSelectedResponse(selectedResponse) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'selectedResponse', selectedResponse);
    }
    updateSelectedResponse(selectedResponse) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'selectedResponse', selectedResponse);
    }
    delSelectedResponse(selectedResponse) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'selectedResponse/' + selectedResponse.id, { responseType: 'text' });
    }
}
SelectedResponseService.ɵfac = function SelectedResponseService_Factory(t) { return new (t || SelectedResponseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SelectedResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectedResponseService, factory: SelectedResponseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedResponseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6UBZ":
/*!***************************************************!*\
  !*** ./src/app/services/answer-option.service.ts ***!
  \***************************************************/
/*! exports provided: AnswerOptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerOptionService", function() { return AnswerOptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AnswerOptionService {
    constructor(http) {
        this.http = http;
    }
    getAnsOpts() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'ansopt/all');
    }
    getAnsOptByQuestion(questionID) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'ansopt/' + questionID);
    }
    saveQAnsOpt(ansOpt) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'ansopt', ansOpt);
    }
    updateAnsOpt(ansOpt) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'ansopt', ansOpt);
    }
    delAnsOpt(ansOpt) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'ansopt/' + ansOpt.id, { responseType: 'text' });
    }
}
AnswerOptionService.ɵfac = function AnswerOptionService_Factory(t) { return new (t || AnswerOptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AnswerOptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnswerOptionService, factory: AnswerOptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerOptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: '',
    // apiURL : 'http://localhost:8090/',
    urlExams: 'http://localhost:4200/present-exam/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BMxT":
/*!****************************************!*\
  !*** ./src/app/dto/OpenQuestionDto.ts ***!
  \****************************************/
/*! exports provided: OpenQuestionDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenQuestionDto", function() { return OpenQuestionDto; });
/* harmony import */ var _abstractDto_QuestionDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractDto/QuestionDto */ "HgME");

class OpenQuestionDto extends _abstractDto_QuestionDto__WEBPACK_IMPORTED_MODULE_0__["QuestionDto"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "C4M3":
/*!******************************************************************************************************!*\
  !*** ./src/app/Componentes/exam-studen-selected-response/exam-studen-selected-response.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExamStudenSelectedResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudenSelectedResponseComponent", function() { return ExamStudenSelectedResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dto/AnswerOptionDto */ "nPLF");
/* harmony import */ var src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/selected-response.service */ "6Baw");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");










function ExamStudenSelectedResponseComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExamStudenSelectedResponseComponent_div_11_div_1_Template_p_radioButton_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectedAnsOpt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("inputId", ansOpt_r3.id.toString())("value", ansOpt_r3)("ngModel", ctx_r2.selectedAnsOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ansOpt_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r3.description);
} }
function ExamStudenSelectedResponseComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamStudenSelectedResponseComponent_div_11_div_1_Template, 4, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.asnOpts);
} }
function ExamStudenSelectedResponseComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExamStudenSelectedResponseComponent_div_12_div_1_Template_p_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.selectedAnsOpts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("inputId", ansOpt_r7.id.toString())("value", ansOpt_r7)("ngModel", ctx_r6.selectedAnsOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ansOpt_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r7.description);
} }
function ExamStudenSelectedResponseComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExamStudenSelectedResponseComponent_div_12_div_1_Template, 4, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.asnOpts);
} }
class ExamStudenSelectedResponseComponent {
    constructor(selectedResponseService, ansOptsService, dynamicDialogConfig, dynamicDialogRef) {
        this.selectedResponseService = selectedResponseService;
        this.ansOptsService = ansOptsService;
        this.dynamicDialogConfig = dynamicDialogConfig;
        this.dynamicDialogRef = dynamicDialogRef;
        this.selectedQuestion = this.dynamicDialogConfig.data.selectedQuestion;
        this.examStudent = this.dynamicDialogConfig.data.examStudent;
        this.asnOpts = new Array();
        this.selectedAnsOpt = new src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_1__["AnswerOptionDto"];
        this.selectedAnsOpts = new Array();
    }
    ngOnInit() {
        this.getAnsOpts();
    }
    getAnsOpts() {
        this.ansOptsService.getAnsOptByQuestion(this.selectedQuestion.id).subscribe(ansOpts => {
            this.asnOpts = ansOpts;
            this.asnOpts.forEach(ansOpt => this.getSelectedResponse(ansOpt));
        }, error => console.log(error));
    }
    getSelectedResponse(ansOpt) {
        this.selectedResponseService.getSelectedResponseByExamStudentAndQuestion(this.examStudent.id, ansOpt.id).subscribe(selectedResponse => {
            if (selectedResponse && this.selectedQuestion.type === "mu" && selectedResponse.answerOption.id === ansOpt.id) {
                this.selectedAnsOpt = ansOpt;
            }
            else if (selectedResponse && this.selectedQuestion.type === "mm" && selectedResponse.answerOption.id === ansOpt.id) {
                let temp = [ansOpt];
                this.selectedAnsOpts.forEach(item => { temp.push(item); });
                this.selectedAnsOpts = temp;
            }
        }, error => console.log(error));
    }
}
ExamStudenSelectedResponseComponent.ɵfac = function ExamStudenSelectedResponseComponent_Factory(t) { return new (t || ExamStudenSelectedResponseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_2__["SelectedResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_3__["AnswerOptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"])); };
ExamStudenSelectedResponseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamStudenSelectedResponseComponent, selectors: [["app-exam-studen-selected-response"]], decls: 13, vars: 6, consts: [[4, "ngIf"], ["class", "p-field-radiobutton", 4, "ngFor", "ngForOf"], [1, "p-field-radiobutton"], ["name", "multipleUniqueGroup", 3, "disabled", "inputId", "value", "ngModel", "ngModelChange"], [3, "for"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], ["name", "multipleMultipleGroup", 3, "readonly", "inputId", "value", "ngModel", "ngModelChange"]], template: function ExamStudenSelectedResponseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Question description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Question weight ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExamStudenSelectedResponseComponent_div_11_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExamStudenSelectedResponseComponent_div_12_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedQuestion.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedQuestion.weight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.examStudent.student.name, " ", ctx.examStudent.student.lastname, " response ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedQuestion.type === "mu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedQuestion.type === "mm");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__["RadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXN0dWRlbi1zZWxlY3RlZC1yZXNwb25zZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamStudenSelectedResponseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-studen-selected-response',
                templateUrl: './exam-studen-selected-response.component.html',
                styleUrls: ['./exam-studen-selected-response.component.css']
            }]
    }], function () { return [{ type: src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_2__["SelectedResponseService"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_3__["AnswerOptionService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DynamicDialogRef"] }]; }, null); })();


/***/ }),

/***/ "EhXC":
/*!******************************************************************************************!*\
  !*** ./src/app/Componentes/exam-students-responses/exam-students-responses.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ExamStudentsResponsesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudentsResponsesComponent", function() { return ExamStudentsResponsesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/exam-student.service */ "qIA5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");







function ExamStudentsResponsesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Students that have responses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamStudentsResponsesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Identification card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lastname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Final grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamStudentsResponsesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamStudentsResponsesComponent_ng_template_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const examStudent_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.grade(examStudent_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const examStudent_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examStudent_r4.student.identificationCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examStudent_r4.student.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examStudent_r4.student.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](examStudent_r4.definitiveGrade);
} }
class ExamStudentsResponsesComponent {
    constructor(examStudentService, activatedRoute, router) {
        this.examStudentService = examStudentService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.examStudents = new Array();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            this.getExamStudent(Number(param.get('examId')));
        });
    }
    getExamStudent(examId) {
        this.examStudentService.getExamStudentsByExam(examId).subscribe(examStudents => this.examStudents = examStudents, error => console.log(error));
    }
    grade(selectedExamStudent) {
        this.router.navigate(['professor-main-view/exam-student-response-detail', { examStudentId: selectedExamStudent.id }]);
    }
}
ExamStudentsResponsesComponent.ɵfac = function ExamStudentsResponsesComponent_Factory(t) { return new (t || ExamStudentsResponsesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_1__["ExamStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ExamStudentsResponsesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamStudentsResponsesComponent, selectors: [["app-exam-grade-students-responses"]], decls: 5, vars: 3, consts: [[3, "value", "paginator", "rows"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "table-header"], ["pSortableColumn", "identificationCard"], ["field", "identificationCard"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "lastname"], ["field", "lastname"], ["pSortableColumn", "FinalGrade"], ["field", "finalGrade"], ["pButton", "", "type", "button", "icon", "pi pi-star-o", 1, "p-button-text", 3, "click"]], template: function ExamStudentsResponsesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamStudentsResponsesComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamStudentsResponsesComponent_ng_template_3_Template, 15, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamStudentsResponsesComponent_ng_template_4_Template, 11, 4, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.examStudents)("paginator", true)("rows", 10);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["SortIcon"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXN0dWRlbnRzLXJlc3BvbnNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamStudentsResponsesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-grade-students-responses',
                templateUrl: './exam-students-responses.component.html',
                styleUrls: ['./exam-students-responses.component.css']
            }]
    }], function () { return [{ type: src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_1__["ExamStudentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "HgME":
/*!************************************************!*\
  !*** ./src/app/dto/abstractDto/QuestionDto.ts ***!
  \************************************************/
/*! exports provided: QuestionDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDto", function() { return QuestionDto; });
/* harmony import */ var _ExamDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExamDto */ "qk8R");

class QuestionDto {
    constructor() {
        this.id = 0;
        this.description = "";
        this.questionImage = "";
        this.weight = 0.0;
        // op -> open | mu -> multiple unique | mm -> multiple multiple
        this.type = "op";
        this.exam = new _ExamDto__WEBPACK_IMPORTED_MODULE_0__["ExamDto"];
    }
}


/***/ }),

/***/ "JmRu":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class StudentService {
    constructor(http) {
        this.http = http;
    }
    getStudents() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'student/all');
    }
    getStudentByIdentificationCard(identCard) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'student/byIdentCard?id=' + identCard);
    }
    saveStudent(student) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'student', student);
    }
    updateStudent(student) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'student', student);
    }
    delStudent(student) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'student/' + student.id, { responseType: 'text' });
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "M9zn":
/*!********************************************************************************!*\
  !*** ./src/app/Componentes/question-main-view/question-main-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuestionMainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMainViewComponent", function() { return QuestionMainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/OpenQuestionDto */ "BMxT");
/* harmony import */ var src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tools/manageAnsOpts */ "Y0xo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/question-type.pipe */ "e1f3");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/weight.pipe */ "rMaZ");














function QuestionMainViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kind of question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionMainViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "questionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionMainViewComponent_ng_template_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const question_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.updateQuestion(question_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionMainViewComponent_ng_template_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const question_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delQuestion(question_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, question_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, question_r2.weight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingQuestion);
} }
class QuestionMainViewComponent {
    constructor(formBuilder, messageService, questionService, ansOptService) {
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.questionService = questionService;
        this.ansOptService = ansOptService;
        this.questions = new Array();
        this.questionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_2__["OpenQuestionDto"];
        this.questionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.questionForm = this.formBuilder.group({});
        this.questionFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.creatingQuestion = true;
        this.creatingQuestionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.maxWeight = 0;
        this.maxWeightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manageAnsOpts = new src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_3__["ManageAnsOpts"];
        this.manageAnsOptsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    putQuestionInfoIntoQuestionForm(question) {
        let type;
        if (question.type === "op") {
            type = { code: "op", name: "Open question" };
        }
        else if (question.type === "mu") {
            type = { code: "mu", name: "Multiple unique" };
        }
        else {
            type = { code: "mm", name: "Multiple multiple" };
        }
        this.questionForm.setValue({
            weight: question.weight,
            type: type,
            description: question.description
        });
    }
    addMaxWeight(question) {
        this.maxWeight += question.weight;
        this.maxWeight = Number(this.maxWeight.toPrecision(2));
        this.maxWeightChange.emit(this.maxWeight);
    }
    getAnswerOptions(question) {
        if (question.type === "op") {
            return;
        }
        this.ansOptService.getAnsOptByQuestion(question.id).subscribe(ansOpts => {
            this.manageAnsOpts.ansOpts = ansOpts;
            this.manageAnsOptsChange.emit(this.manageAnsOpts);
        }, error => console.log(error));
    }
    updateQuestion(question) {
        this.question = question;
        this.questionChange.emit(this.question);
        this.getAnswerOptions(question);
        this.creatingQuestionChange.emit(false);
        this.putQuestionInfoIntoQuestionForm(question);
        this.questionFormChange.emit(this.questionForm);
        this.addMaxWeight(question);
    }
    delQuestImage(question) {
        if (question.questionImage !== "") {
            this.questionService.delImage(question.questionImage);
        }
    }
    delQuestion(question) {
        this.questionService.delQuestion(question).subscribe(response => {
            this.delQuestImage(question);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Question deleted successfully' });
            this.questions.splice(this.questions.indexOf(question), 1);
            this.questionsChange.emit(this.questions);
            this.addMaxWeight(question);
        }, error => console.log(error));
    }
}
QuestionMainViewComponent.ɵfac = function QuestionMainViewComponent_Factory(t) { return new (t || QuestionMainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_6__["AnswerOptionService"])); };
QuestionMainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionMainViewComponent, selectors: [["app-question-main-view"]], inputs: { questions: "questions", questionForm: "questionForm", question: "question", creatingQuestion: "creatingQuestion", maxWeight: "maxWeight", manageAnsOpts: "manageAnsOpts" }, outputs: { questionsChange: "questionsChange", questionFormChange: "questionFormChange", questionChange: "questionChange", creatingQuestionChange: "creatingQuestionChange", maxWeightChange: "maxWeightChange", manageAnsOptsChange: "manageAnsOptsChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])], decls: 4, vars: 3, consts: [["sortMode", "multiple", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-text", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-text", 3, "disabled", "click"]], template: function QuestionMainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionMainViewComponent_ng_template_2_Template, 9, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuestionMainViewComponent_ng_template_3_Template, 12, 9, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.questions)("paginator", true)("rows", 10);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], pipes: [_pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_10__["QuestionTypePipe"], _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_11__["WeightPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1tYWluLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionMainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-main-view',
                templateUrl: './question-main-view.component.html',
                styleUrls: ['./question-main-view.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }, { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_6__["AnswerOptionService"] }]; }, { questions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], questionForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionFormChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], creatingQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creatingQuestionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], maxWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWeightChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], manageAnsOpts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], manageAnsOptsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "P/bm":
/*!*************************************!*\
  !*** ./src/app/pipes/correctAns.ts ***!
  \*************************************/
/*! exports provided: correctAnswerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correctAnswerPipe", function() { return correctAnswerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class correctAnswerPipe {
    transform(isCorrectAns) {
        return (isCorrectAns) ? 'Yes' : 'No';
    }
}
correctAnswerPipe.ɵfac = function correctAnswerPipe_Factory(t) { return new (t || correctAnswerPipe)(); };
correctAnswerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "correctAns", type: correctAnswerPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](correctAnswerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'correctAns' }]
    }], null, null); })();


/***/ }),

/***/ "P47t":
/*!****************************************************************************!*\
  !*** ./src/app/Componentes/create-professor/create-professor.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfessorComponent", function() { return CreateProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_Professor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Professor.service */ "utYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");











class CreateProfessorComponent {
    constructor(ProfessorService, formBuilder, router, messageService) {
        this.ProfessorService = ProfessorService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.messageService = messageService;
        this.form = this.formBuilder.group({
            id: ['', []],
            identificationCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9]+"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16)])
        });
    }
    saveProfessor() {
        this.ProfessorService.saveProfessor(this.form.value).subscribe(response => {
            this.form.reset();
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Professor created successfully' });
            this.router.navigate(["/professor-main-view"]);
        }, error => {
            console.log(error);
            let errorMessageObject = error.error;
            let errorMessage, errorStatus = error.status;
            this.messageService.add({ severity: 'error', summary: errorStatus,
                detail: 'error', sticky: true });
            //console.log(error);
        });
    }
    cancel() {
        this.form.reset();
        this.router.navigate(["/professor-main-view"]);
    }
}
CreateProfessorComponent.ɵfac = function CreateProfessorComponent_Factory(t) { return new (t || CreateProfessorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_Professor_service__WEBPACK_IMPORTED_MODULE_3__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
CreateProfessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateProfessorComponent, selectors: [["app-create-professor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 37, vars: 2, consts: [[3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], [1, "p-float-label"], ["id", "identificationCard", "type", "text", "pInputText", "", "formControlName", "identificationCard"], ["for", "inputtext"], [1, "p-float-label", "p-input-icon-left", "form-user__div-span"], ["id", "name-input", "type", "text", "pInputText", "", "formControlName", "name"], ["for", "name-input"], [1, "p-float-label", "p-input-icon-right", "form-user__div-span"], ["id", "lastname-input", "type", "text", "pInputText", "", "formControlName", "lastname"], ["for", "lastname-input"], [1, "p-float-label", "p-input-icon-right"], ["id", "email-input", "type", "email", "pInputText", "", "formControlName", "email"], ["for", "email-input"], ["id", "username-input", "type", "text", "pInputText", "", "formControlName", "username"], ["for", "username-input"], [1, "form-p-field", "p-col-12", "p-md-6"], ["id", "password-input", "type", "password", "pInputText", "", "formControlName", "password"], ["for", "password-input"], ["icon", "pi pi-pencil", "label", "Create user", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "Cancel", 1, "p-button-danger", 3, "click"]], template: function CreateProfessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Identification Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProfessorComponent_Template_p_button_click_34_listener() { return ctx.saveProfessor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateProfessorComponent_Template_p_button_click_36_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcHJvZmVzc29yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProfessorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-professor',
                templateUrl: './create-professor.component.html',
                styleUrls: ['./create-professor.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
            }]
    }], function () { return [{ type: _services_Professor_service__WEBPACK_IMPORTED_MODULE_3__["ProfessorService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "QqLy":
/*!**********************************************************************!*\
  !*** ./src/app/Componentes/question-form/question-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFormComponent", function() { return QuestionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/OpenQuestionDto */ "BMxT");
/* harmony import */ var _answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../answer-option-form/answer-option-form.component */ "jT+t");
/* harmony import */ var src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tools/manageAnsOpts */ "Y0xo");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _question_main_view_question_main_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../question-main-view/question-main-view.component */ "M9zn");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ "jIHw");
























function QuestionFormComponent_div_7_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuestionFormComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Update answer options ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionFormComponent_div_7_div_10_Template_p_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.updateAnsOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionFormComponent_div_7_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionFormComponent_div_7_div_19_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.saveQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.questionForm.invalid);
} }
function QuestionFormComponent_div_7_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionFormComponent_div_7_div_20_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.updateQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.questionForm.invalid);
} }
function QuestionFormComponent_div_7_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionFormComponent_div_7_div_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.cancelUpdateQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionFormComponent_div_7_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionFormComponent_div_7_img_5_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kind of question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function QuestionFormComponent_div_7_Template_p_dropdown_onChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addAnsOpts($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionFormComponent_div_7_div_10_Template, 4, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p-inputNumber", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuestionFormComponent_div_7_div_19_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuestionFormComponent_div_7_div_20_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuestionFormComponent_div_7_div_21_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-question-main-view", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("manageAnsOptsChange", function QuestionFormComponent_div_7_Template_app_question_main_view_manageAnsOptsChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.manageAnsOpts = $event; })("maxWeightChange", function QuestionFormComponent_div_7_Template_app_question_main_view_maxWeightChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.maxWeight = $event; })("questionsChange", function QuestionFormComponent_div_7_Template_app_question_main_view_questionsChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.questions = $event; })("questionChange", function QuestionFormComponent_div_7_Template_app_question_main_view_questionChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.question = $event; })("questionFormChange", function QuestionFormComponent_div_7_Template_app_question_main_view_questionFormChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.questionForm = $event; })("creatingQuestionChange", function QuestionFormComponent_div_7_Template_app_question_main_view_creatingQuestionChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.creatingQuestion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.questionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.imgURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.questionTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.manageAnsOpts.ansOpts.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx_r0.maxWeight)("min", 0)("step", 0.01)("minFractionDigits", 1)("maxFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 4)("autoResize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.creatingQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.creatingQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.creatingQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("manageAnsOpts", ctx_r0.manageAnsOpts)("maxWeight", ctx_r0.maxWeight)("questions", ctx_r0.questions)("question", ctx_r0.question)("questionForm", ctx_r0.questionForm)("creatingQuestion", ctx_r0.creatingQuestion);
} }
class QuestionFormComponent {
    constructor(questionService, formBuilder, messageService, dynamicService, confirmDialog, answerOptionService) {
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.dynamicService = dynamicService;
        this.confirmDialog = confirmDialog;
        this.answerOptionService = answerOptionService;
        this.manageAnsOpts = new src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_7__["ManageAnsOpts"]();
        this.questionTypes = [
            { code: "op", name: "Open question" },
            { code: "mu", name: "Multiple unique" },
            { code: "mm", name: "Multiple multiple" }
        ];
        this.dropListExams = new Array();
        this.exams = new Array();
        this.questions = new Array();
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__["ExamDto"];
        this.maxWeight = 1;
        this.questionForm = this.formBuilder.group({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.maxWeight)]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.questionTypes[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(200)])
        });
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__["OpenQuestionDto"];
        this.creatingQuestion = true;
        this.loadedImage = undefined;
        this.imgURL = "";
    }
    ngOnInit() {
    }
    resetComponentAttributes() {
        this.dropListExams = new Array();
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__["OpenQuestionDto"];
        this.questions = new Array();
        this.manageAnsOpts = new src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_7__["ManageAnsOpts"]();
        this.loadedImage = undefined;
        this.imgURL = "";
        this.creatingQuestion = true;
        this.maxWeight = 1;
    }
    search(event) {
        this.resetComponentAttributes();
        this.exams.forEach(exam => {
            (exam.name.indexOf(event.query) != -1) ? this.dropListExams.push(exam) : false;
        });
    }
    subMaxWeight(question) {
        this.maxWeight -= question.weight;
        this.maxWeight = Number(this.maxWeight.toPrecision(2));
    }
    calculateMaxAvailableGrade() {
        let maxWeight = 1;
        this.questions.forEach(question => {
            maxWeight -= question.weight;
            maxWeight = Number(maxWeight.toPrecision(2));
        });
        this.maxWeight = maxWeight;
    }
    setQuestions() {
        this.questionService.getQuestionByExam(this.exam.id).subscribe(questions => {
            this.questions = questions;
            this.calculateMaxAvailableGrade();
        }, error => console.log(error));
    }
    resetQuestionForm() {
        this.questionForm.reset({
            weight: 0.0,
            type: this.questionTypes[0],
            description: ''
        });
    }
    onFileChanged(event) {
        let selectedImage = event.target.files[0];
        if (selectedImage) {
            this.loadedImage = selectedImage;
            // Below part is used to display the selected image
            let readerBase64 = new FileReader();
            readerBase64.readAsDataURL(selectedImage);
            readerBase64.onload = () => {
                this.imgURL = readerBase64.result;
            };
        }
        else {
            this.imgURL = "";
            this.loadedImage = undefined;
        }
    }
    getInfoFromQuestionForm(question) {
        let questionForm = this.questionForm.value;
        question.weight = questionForm.weight;
        question.type = questionForm.type.code;
        question.description = questionForm.description;
    }
    saveAnswerOpt(question) {
        this.manageAnsOpts.newAnsOpts.forEach(ansOpt => {
            ansOpt.question = question;
            this.answerOptionService.saveQAnsOpt(ansOpt).subscribe(ansOpt => ansOpt, error => console.log(error));
        });
    }
    updateAnswerOpt(question) {
        this.manageAnsOpts.uptAnsOpts.forEach(ansOpt => {
            ansOpt.question = question;
            this.answerOptionService.updateAnsOpt(ansOpt).subscribe(ansOpt => ansOpt, error => console.log(error));
        });
    }
    delAnswerOpt(question) {
        this.manageAnsOpts.delAnsOpts.forEach(ansOpt => {
            ansOpt.question = question;
            this.answerOptionService.delAnsOpt(ansOpt).subscribe(response => response, error => console.log(error));
        });
    }
    saveQuestionIntoDataBase(question) {
        this.questionService.saveQuestion(question).subscribe(question => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Question created successfully' });
            this.questions.push(question);
            this.subMaxWeight(question);
            this.manageAnsOpts.resolve();
            this.saveAnswerOpt(question);
            this.manageAnsOpts.resetAttributes();
        }, error => {
            console.log(error);
            this.manageAnsOpts.resetAttributes();
        });
    }
    saveSelectedImageIntoDataBase(question) {
        this.questionService.saveImage(this.loadedImage).subscribe(imageName => {
            question.questionImage = imageName;
            this.saveQuestionIntoDataBase(question);
        }, error => console.log(error));
    }
    saveQuestion() {
        let question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__["OpenQuestionDto"];
        question.exam = this.exam;
        this.getInfoFromQuestionForm(question);
        this.resetQuestionForm();
        if (this.loadedImage) {
            this.saveSelectedImageIntoDataBase(question);
            this.loadedImage = undefined;
            this.imgURL = "";
        }
        else {
            this.saveQuestionIntoDataBase(question);
        }
    }
    updateQuestionIntoDataBase(question, index) {
        this.questionService.updateQuestion(this.question).subscribe(question => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Question updated successfully' });
            this.questions.splice(index, 1, question);
            this.calculateMaxAvailableGrade();
            this.manageAnsOpts.resolve();
            this.saveAnswerOpt(question);
            this.updateAnswerOpt(question);
            this.delAnswerOpt(question);
            this.manageAnsOpts.resetAttributes();
        }, error => {
            console.log(error);
            this.subMaxWeight(this.question);
            this.manageAnsOpts.resetAttributes();
        });
    }
    updateSelectedImageIntoDataBase(question, index) {
        this.questionService.saveImage(this.loadedImage).subscribe(imageRoute => {
            question.questionImage = imageRoute;
            this.updateQuestionIntoDataBase(question, index);
        }, error => console.log(error));
    }
    deleteModifiedImageIntoDataBase(question) {
        if (question.questionImage === "") {
            return;
        }
        this.questionService.delImage(question.questionImage).subscribe(response => response, error => console.log(error));
    }
    updateQuestion() {
        let index = this.questions.findIndex((q) => q === this.question);
        if (index === -1) {
            console.log("question not found!");
            return;
        }
        this.getInfoFromQuestionForm(this.question);
        if (this.loadedImage) {
            this.deleteModifiedImageIntoDataBase(this.question);
            this.updateSelectedImageIntoDataBase(this.question, index);
            this.loadedImage = undefined;
            this.imgURL = "";
        }
        else {
            this.updateQuestionIntoDataBase(this.question, index);
        }
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__["OpenQuestionDto"];
        this.creatingQuestion = true;
        this.resetQuestionForm();
    }
    cancelUpdateQuestion() {
        this.subMaxWeight(this.question);
        this.resetQuestionForm();
        this.creatingQuestion = true;
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_5__["OpenQuestionDto"];
        this.manageAnsOpts = new src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_7__["ManageAnsOpts"];
    }
    goToAddAnsOpt(event) {
        let questionType = event.value;
        this.question.type = questionType.code;
        let ref = this.dynamicService.open(_answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_6__["AnswerOptionFormComponent"], {
            data: { question: this.question, manageAnsOpts: this.manageAnsOpts },
            header: 'Manage answer option',
            width: '70%'
        });
        ref.onClose.subscribe((manageAnsOpts) => {
            if (manageAnsOpts) {
                this.manageAnsOpts = manageAnsOpts;
            }
            else {
                let OPEN_QUESTION_INDEX = 0;
                let questionForm = this.questionForm.value;
                this.questionForm.setValue({
                    weight: questionForm.weight,
                    type: this.questionTypes[OPEN_QUESTION_INDEX],
                    description: questionForm.description
                });
            }
        });
    }
    addAnsOpts(event) {
        if (event.value.code === "op") {
            return;
        }
        if (this.manageAnsOpts.ansOpts.length) {
            this.confirmDialog.confirm({
                message: 'if you want to proceed, saved answer options from last question will be erased!',
                accept: () => {
                    this.manageAnsOpts.ansOpts = new Array();
                    this.goToAddAnsOpt(event);
                },
                reject: () => {
                }
            });
        }
        else {
            this.goToAddAnsOpt(event);
        }
    }
    updateAnsOpt() {
        let ref = this.dynamicService.open(_answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_6__["AnswerOptionFormComponent"], {
            data: { question: this.question, manageAnsOpts: this.manageAnsOpts },
            header: 'Update answer options',
            width: '70%'
        });
        ref.onClose.subscribe((manageAnsOpts) => {
            if (manageAnsOpts) {
                this.manageAnsOpts = manageAnsOpts;
            }
        });
    }
}
QuestionFormComponent.ɵfac = function QuestionFormComponent_Factory(t) { return new (t || QuestionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_9__["AnswerOptionService"])); };
QuestionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionFormComponent, selectors: [["app-question-form"]], inputs: { exams: "exams" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])], decls: 8, vars: 4, consts: [["header", "Confirmation", "icon", "pi pi-exclamation-triangle"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["for", "auto-question-exam"], ["id", "auto-question-exam", "field", "name", 3, "ngModel", "suggestions", "dropdown", "ngModelChange", "onSelect", "completeMethod"], [4, "ngIf"], [3, "formGroup"], ["type", "file", "accept", "image/png, image/jpeg", 3, "change"], ["height", "25", 3, "src", 4, "ngIf"], [1, "p-field", "p-col-6"], ["for", "questionType"], ["id", "questionType", "optionLabel", "name", "formControlName", "type", 3, "options", "onChange"], ["class", "p-field p-col-6", 4, "ngIf"], ["for", "weight"], ["id", "weight", "mode", "decimal", "formControlName", "weight", 3, "max", "min", "step", "minFractionDigits", "maxFractionDigits"], ["for", "question-description"], ["id", "question-description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], ["class", "p-field p-col-12 p-md-6", 4, "ngIf"], [3, "manageAnsOpts", "maxWeight", "questions", "question", "questionForm", "creatingQuestion", "manageAnsOptsChange", "maxWeightChange", "questionsChange", "questionChange", "questionFormChange", "creatingQuestionChange"], ["height", "25", 3, "src"], ["for", "upAnsOptButton"], ["id", "upAnsOptButton", "icon", "pi pi-pencil", "label", "Update", 1, "p-button-secondary", 3, "click"], [1, "p-field", "p-col-12", "p-md-6"], ["icon", "pi pi-check", "label", "Add question", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-check", "label", "Update question", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "Cancel", 1, "p-button-secondary", 3, "click"]], template: function QuestionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-confirmDialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select an exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-autoComplete", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuestionFormComponent_Template_p_autoComplete_ngModelChange_6_listener($event) { return ctx.exam = $event; })("onSelect", function QuestionFormComponent_Template_p_autoComplete_onSelect_6_listener() { return ctx.setQuestions(); })("completeMethod", function QuestionFormComponent_Template_p_autoComplete_completeMethod_6_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionFormComponent_div_7_Template, 23, 20, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.exam)("suggestions", ctx.dropListExams)("dropdown", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exam.id !== 0);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialog"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_16__["InputTextarea"], _question_main_view_question_main_view_component__WEBPACK_IMPORTED_MODULE_17__["QuestionMainViewComponent"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-form',
                templateUrl: './question-form.component.html',
                styleUrls: ['./question-form.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_9__["AnswerOptionService"] }]; }, { exams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'examsapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TuCJ":
/*!*************************************!*\
  !*** ./src/app/dto/ProfessorDto.ts ***!
  \*************************************/
/*! exports provided: ProfessorDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorDto", function() { return ProfessorDto; });
class ProfessorDto {
    constructor() {
        this.id = 1;
        this.identificationCard = new String("");
        this.name = new String("");
        this.lastname = new String("");
        this.email = new String("");
        this.username = new String("");
        this.password = new String("");
    }
}


/***/ }),

/***/ "UcdY":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class QuestionService {
    constructor(http) {
        this.http = http;
    }
    getQuestions() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/all');
    }
    getQuestionByExam(examID) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/' + examID);
    }
    getImage(fileName) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/getImage/?filename=' + fileName, { responseType: 'blob' });
    }
    saveQuestion(question) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question', question);
    }
    saveImage(image) {
        let imageFile = new FormData();
        imageFile.append("file", image);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/saveImage', imageFile, { responseType: 'text' });
    }
    delImage(fileName) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/delImage/?filename=' + fileName, { responseType: 'text' });
    }
    updateQuestion(question) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question', question);
    }
    delQuestion(question) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'question/' + question.id, { responseType: 'text' });
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y0xo":
/*!****************************************!*\
  !*** ./src/app/tools/manageAnsOpts.ts ***!
  \****************************************/
/*! exports provided: ManageAnsOpts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAnsOpts", function() { return ManageAnsOpts; });
class ManageAnsOpts {
    constructor() {
        this._ansOpts = new Array();
        this._newAnsOpts = new Array();
        this._uptAnsOpts = new Array();
        this._delAnsOpts = new Array();
    }
    resetAttributes() {
        this._ansOpts = new Array();
        this._newAnsOpts = new Array();
        this._uptAnsOpts = new Array();
        this._delAnsOpts = new Array();
    }
    get ansOpts() {
        return this._ansOpts;
    }
    set ansOpts(value) {
        this._ansOpts = value;
    }
    get newAnsOpts() {
        return this._newAnsOpts;
    }
    set newAnsOpts(value) {
        this._newAnsOpts = value;
    }
    get uptAnsOpts() {
        return this._uptAnsOpts;
    }
    set uptAnsOpts(value) {
        this._uptAnsOpts = value;
    }
    get delAnsOpts() {
        return this._delAnsOpts;
    }
    set delAnsOpts(value) {
        this._delAnsOpts = value;
    }
    findIndicesForUnexistentUptAns(unexistentUptAnsIndices) {
        let i = 0;
        this.uptAnsOpts.forEach(ansOpt => {
            if (ansOpt.id === 0) {
                unexistentUptAnsIndices.push(i);
            }
            i++;
        });
    }
    findIndicesForUnexistentDelAns(unexistentDelAnsIndices) {
        let i = 0;
        this.delAnsOpts.forEach(ansOpt => {
            if (ansOpt.id === 0) {
                unexistentDelAnsIndices.push(i);
            }
            i++;
        });
    }
    addUnexistentAnsOptAsNewAnsOpt(unexistentUptAnsIndices) {
        unexistentUptAnsIndices.forEach(index => {
            this.newAnsOpts.push(this.uptAnsOpts[index]);
            this.uptAnsOpts.splice(index, 1);
        });
    }
    discardUnexistentAnsOptForDeleteRequest(unexistentDelAnsIndices) {
        unexistentDelAnsIndices.forEach(index => {
            this.delAnsOpts.splice(index, 1);
        });
    }
    resolve() {
        // all unexistent ans options mean that these don't exist into database
        let unexistentUptAnsIndices = new Array();
        let unexistentDelAnsIndices = new Array();
        this.findIndicesForUnexistentUptAns(unexistentUptAnsIndices);
        this.findIndicesForUnexistentDelAns(unexistentDelAnsIndices);
        this.addUnexistentAnsOptAsNewAnsOpt(unexistentUptAnsIndices);
        this.discardUnexistentAnsOptForDeleteRequest(unexistentDelAnsIndices);
    }
    addItemIntoAnsOpts(ansOpt) {
        this.ansOpts.push(ansOpt);
    }
    addItemIntoNewAnsOpts(ansOpt) {
        this.newAnsOpts.push(ansOpt);
    }
    addItemIntoUptAnsOpts(ansOpt) {
        let index = this.uptAnsOpts.indexOf(ansOpt);
        if (index === -1) {
            this.uptAnsOpts.push(ansOpt);
        }
        else {
            this.uptAnsOpts.splice(index, 1, ansOpt);
        }
        this.delDuplicates(ansOpt, this.newAnsOpts, this.delAnsOpts);
    }
    addItemIntoDelAnsOpts(ansOpt) {
        this.delAnsOpts.push(ansOpt);
        this.delDuplicates(ansOpt, this.newAnsOpts, this.uptAnsOpts);
    }
    delDuplicates(ansOpt, array1, array2) {
        let array1Index = array1.indexOf(ansOpt);
        let array2Index = array2.indexOf(ansOpt);
        if (array1Index !== -1) {
            array1.splice(array1Index, 1);
        }
        if (array2Index !== -1) {
            array2.splice(array2Index, 1);
        }
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ "1SLH");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/togglebutton */ "Y+ZO");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/orderlist */ "cQJI");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _Componentes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Componentes/page-not-found/page-not-found.component */ "c2ev");
/* harmony import */ var _Componentes_create_professor_create_professor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Componentes/create-professor/create-professor.component */ "P47t");
/* harmony import */ var _Componentes_professor_main_view_professor_main_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Componentes/professor-main-view/professor-main-view.component */ "3USH");
/* harmony import */ var _Componentes_professor_interaction_professor_interaction_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Componentes/professor-interaction/professor-interaction.component */ "bOhx");
/* harmony import */ var _Componentes_exam_main_view_exam_main_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Componentes/exam-main-view/exam-main-view.component */ "hZ11");
/* harmony import */ var _Componentes_exam_form_exam_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Componentes/exam-form/exam-form.component */ "ZStt");
/* harmony import */ var _Componentes_question_form_question_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Componentes/question-form/question-form.component */ "QqLy");
/* harmony import */ var _Componentes_question_main_view_question_main_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Componentes/question-main-view/question-main-view.component */ "M9zn");
/* harmony import */ var _Componentes_manage_exam_manage_exam_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Componentes/manage-exam/manage-exam.component */ "lrpF");
/* harmony import */ var _Componentes_answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Componentes/answer-option-form/answer-option-form.component */ "jT+t");
/* harmony import */ var _Componentes_answer_option_main_view_answer_option_main_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Componentes/answer-option-main-view/answer-option-main-view.component */ "xCWq");
/* harmony import */ var _pipes_correctAns__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/correctAns */ "P/bm");
/* harmony import */ var _Componentes_exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Componentes/exam-details-view/exam-details-view.component */ "pqXE");
/* harmony import */ var _Componentes_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Componentes/student-form/student-form.component */ "v0oZ");
/* harmony import */ var _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pipes/question-type.pipe */ "e1f3");
/* harmony import */ var _Componentes_solve_exam_solve_exam_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Componentes/solve-exam/solve-exam.component */ "t2Ns");
/* harmony import */ var _Componentes_exam_grade_main_view_exam_grade_main_view_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Componentes/exam-grade-main-view/exam-grade-main-view.component */ "1aR0");
/* harmony import */ var _Componentes_exam_students_responses_exam_students_responses_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Componentes/exam-students-responses/exam-students-responses.component */ "EhXC");
/* harmony import */ var _Componentes_exam_student_response_detail_exam_student_response_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Componentes/exam-student-response-detail/exam-student-response-detail.component */ "oM8s");
/* harmony import */ var _Componentes_exam_studen_open_response_exam_studen_open_response_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Componentes/exam-studen-open-response/exam-studen-open-response.component */ "0p9f");
/* harmony import */ var _Componentes_exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Componentes/exam-studen-selected-response/exam-studen-selected-response.component */ "C4M3");
/* harmony import */ var _Componentes_ans_opts_details_ans_opts_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Componentes/ans-opts-details/ans-opts-details.component */ "/nTU");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pipes/weight.pipe */ "rMaZ");

















































;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_9__["MenubarModule"],
            primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"],
            primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"],
            primeng_togglebutton__WEBPACK_IMPORTED_MODULE_18__["ToggleButtonModule"],
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DynamicDialogModule"],
            primeng_orderlist__WEBPACK_IMPORTED_MODULE_20__["OrderListModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_pipes_correctAns__WEBPACK_IMPORTED_MODULE_36__["correctAnswerPipe"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Componentes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
        _Componentes_create_professor_create_professor_component__WEBPACK_IMPORTED_MODULE_26__["CreateProfessorComponent"],
        _Componentes_professor_main_view_professor_main_view_component__WEBPACK_IMPORTED_MODULE_27__["ProfessorMainViewComponent"],
        _Componentes_exam_form_exam_form_component__WEBPACK_IMPORTED_MODULE_30__["ExamFormComponent"],
        _Componentes_professor_interaction_professor_interaction_component__WEBPACK_IMPORTED_MODULE_28__["ProfessorInteractionComponent"],
        _Componentes_exam_main_view_exam_main_view_component__WEBPACK_IMPORTED_MODULE_29__["ExamMainViewComponent"],
        _Componentes_question_form_question_form_component__WEBPACK_IMPORTED_MODULE_31__["QuestionFormComponent"],
        _Componentes_question_main_view_question_main_view_component__WEBPACK_IMPORTED_MODULE_32__["QuestionMainViewComponent"],
        _Componentes_manage_exam_manage_exam_component__WEBPACK_IMPORTED_MODULE_33__["ManageExamComponent"],
        _Componentes_answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_34__["AnswerOptionFormComponent"],
        _Componentes_answer_option_main_view_answer_option_main_view_component__WEBPACK_IMPORTED_MODULE_35__["AnswerOptionMainViewComponent"],
        _Componentes_exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_37__["ExamDetailsViewComponent"],
        _Componentes_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_38__["StudentFormComponent"],
        _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_39__["QuestionTypePipe"],
        _Componentes_solve_exam_solve_exam_component__WEBPACK_IMPORTED_MODULE_40__["SolveExamComponent"],
        _Componentes_exam_grade_main_view_exam_grade_main_view_component__WEBPACK_IMPORTED_MODULE_41__["ExamGradeMainViewComponent"],
        _Componentes_exam_students_responses_exam_students_responses_component__WEBPACK_IMPORTED_MODULE_42__["ExamStudentsResponsesComponent"],
        _Componentes_exam_student_response_detail_exam_student_response_detail_component__WEBPACK_IMPORTED_MODULE_43__["ExamStudentResponseDetailComponent"],
        _Componentes_exam_studen_open_response_exam_studen_open_response_component__WEBPACK_IMPORTED_MODULE_44__["ExamStudenOpenResponseComponent"],
        _Componentes_exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_45__["ExamStudenSelectedResponseComponent"],
        _Componentes_ans_opts_details_ans_opts_details_component__WEBPACK_IMPORTED_MODULE_46__["AnsOptsDetailsComponent"],
        _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_47__["WeightPipe"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_9__["MenubarModule"],
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"],
        primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
        primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"],
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_18__["ToggleButtonModule"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DynamicDialogModule"],
        primeng_orderlist__WEBPACK_IMPORTED_MODULE_20__["OrderListModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _pipes_correctAns__WEBPACK_IMPORTED_MODULE_36__["correctAnswerPipe"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Componentes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"],
                    _Componentes_create_professor_create_professor_component__WEBPACK_IMPORTED_MODULE_26__["CreateProfessorComponent"],
                    _Componentes_professor_main_view_professor_main_view_component__WEBPACK_IMPORTED_MODULE_27__["ProfessorMainViewComponent"],
                    _Componentes_exam_form_exam_form_component__WEBPACK_IMPORTED_MODULE_30__["ExamFormComponent"],
                    _Componentes_professor_interaction_professor_interaction_component__WEBPACK_IMPORTED_MODULE_28__["ProfessorInteractionComponent"],
                    _Componentes_exam_main_view_exam_main_view_component__WEBPACK_IMPORTED_MODULE_29__["ExamMainViewComponent"],
                    _Componentes_question_form_question_form_component__WEBPACK_IMPORTED_MODULE_31__["QuestionFormComponent"],
                    _Componentes_question_main_view_question_main_view_component__WEBPACK_IMPORTED_MODULE_32__["QuestionMainViewComponent"],
                    _Componentes_manage_exam_manage_exam_component__WEBPACK_IMPORTED_MODULE_33__["ManageExamComponent"],
                    _Componentes_answer_option_form_answer_option_form_component__WEBPACK_IMPORTED_MODULE_34__["AnswerOptionFormComponent"],
                    _Componentes_answer_option_main_view_answer_option_main_view_component__WEBPACK_IMPORTED_MODULE_35__["AnswerOptionMainViewComponent"],
                    _Componentes_exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_37__["ExamDetailsViewComponent"],
                    _Componentes_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_38__["StudentFormComponent"],
                    _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_39__["QuestionTypePipe"],
                    _Componentes_solve_exam_solve_exam_component__WEBPACK_IMPORTED_MODULE_40__["SolveExamComponent"],
                    _Componentes_exam_grade_main_view_exam_grade_main_view_component__WEBPACK_IMPORTED_MODULE_41__["ExamGradeMainViewComponent"],
                    _Componentes_exam_students_responses_exam_students_responses_component__WEBPACK_IMPORTED_MODULE_42__["ExamStudentsResponsesComponent"],
                    _Componentes_exam_student_response_detail_exam_student_response_detail_component__WEBPACK_IMPORTED_MODULE_43__["ExamStudentResponseDetailComponent"],
                    _Componentes_exam_studen_open_response_exam_studen_open_response_component__WEBPACK_IMPORTED_MODULE_44__["ExamStudenOpenResponseComponent"],
                    _Componentes_exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_45__["ExamStudenSelectedResponseComponent"],
                    _Componentes_ans_opts_details_ans_opts_details_component__WEBPACK_IMPORTED_MODULE_46__["AnsOptsDetailsComponent"],
                    _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_47__["WeightPipe"]
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_6__["ToastModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_menubar__WEBPACK_IMPORTED_MODULE_9__["MenubarModule"],
                    primeng_sidebar__WEBPACK_IMPORTED_MODULE_10__["SidebarModule"],
                    primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__["InputNumberModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_15__["InputTextareaModule"],
                    primeng_tabview__WEBPACK_IMPORTED_MODULE_16__["TabViewModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteModule"],
                    primeng_togglebutton__WEBPACK_IMPORTED_MODULE_18__["ToggleButtonModule"],
                    primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_19__["DynamicDialogModule"],
                    primeng_orderlist__WEBPACK_IMPORTED_MODULE_20__["OrderListModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__["RadioButtonModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_23__["CheckboxModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"]
                ],
                entryComponents: [_Componentes_exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_37__["ExamDetailsViewComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZStt":
/*!**************************************************************!*\
  !*** ./src/app/Componentes/exam-form/exam-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ExamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamFormComponent", function() { return ExamFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var src_app_dto_ProfessorDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/ProfessorDto */ "TuCJ");
/* harmony import */ var crypto_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-es */ "y0lc");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/exam.service */ "zZNt");
/* harmony import */ var src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/Professor.service */ "utYF");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _exam_main_view_exam_main_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../exam-main-view/exam-main-view.component */ "hZ11");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "jIHw");



















function ExamFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFormComponent_div_19_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.examForm.invalid);
} }
function ExamFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFormComponent_div_20_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancelNewExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamFormComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFormComponent_div_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.examForm.invalid);
} }
function ExamFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamFormComponent_div_22_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cancelUpdateExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExamFormComponent {
    constructor(formBuilder, examService, professorService, messageService) {
        this.formBuilder = formBuilder;
        this.examService = examService;
        this.professorService = professorService;
        this.messageService = messageService;
        this.exams = new Array();
        this.examsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.creatingExam = true;
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_3__["ExamDto"];
        this.examForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
            durability: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(7200)]),
            maxGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0.0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5.0)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1024)])
        });
        this.professor = new src_app_dto_ProfessorDto__WEBPACK_IMPORTED_MODULE_4__["ProfessorDto"];
    }
    ngOnInit() {
        //This code should no be here
        this.setProfessor();
    }
    setProfessor() {
        this.professorService.getByUsername("professor").subscribe(response => {
            this.professor = response;
            this.setExams();
        }, error => console.log(error));
    }
    setExams() {
        this.examService.getExamByProfessor(this.professor.id).subscribe(response => {
            this.exams = response;
            this.examsChange.emit(this.exams);
        }, error => console.log(error));
    }
    resetExamForm() {
        this.examForm.reset({
            name: '',
            durability: 0,
            maxGrade: 0.0,
            description: ''
        });
    }
    generateExamLink() {
        let currentDate = new Date();
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].urlExams + crypto_es__WEBPACK_IMPORTED_MODULE_5__["default"].SHA256(currentDate.toString());
        ;
    }
    extractExamInfoFromExamForm() {
        let examForm = this.examForm.value;
        this.exam.name = examForm.name;
        this.exam.durability = examForm.durability;
        this.exam.maxGrade = examForm.maxGrade;
        this.exam.description = examForm.description;
    }
    saveExam() {
        this.exam.id = 0;
        this.extractExamInfoFromExamForm();
        this.exam.link = this.generateExamLink();
        this.exam.professor = this.professor;
        this.examService.saveExam(this.exam).subscribe(response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exam \"' + response.name + '\" created successfully' });
            this.exams.push(response);
            this.examsChange.emit(this.exams);
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: error.status, detail: 'Error', sticky: true });
        });
        this.resetExamForm();
    }
    updateExam() {
        this.extractExamInfoFromExamForm();
        this.examService.updateExam(this.exam).subscribe(response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Exam \"' + this.exam.name + '\" updated successfully' });
            let index = this.exams.findIndex((e) => e.id === response.id);
            this.exams.splice(index, 1, response);
            this.examsChange.emit(this.exams);
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: error.status, detail: 'Error', sticky: true });
        });
        this.resetExamForm();
        this.creatingExam = true;
    }
    cancelNewExam() {
        this.resetExamForm();
    }
    cancelUpdateExam() {
        this.resetExamForm();
        this.creatingExam = true;
    }
}
ExamFormComponent.ɵfac = function ExamFormComponent_Factory(t) { return new (t || ExamFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_7__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_8__["ProfessorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
ExamFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamFormComponent, selectors: [["app-exam-form"]], inputs: { exams: "exams" }, outputs: { examsChange: "examsChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 24, vars: 16, consts: [[3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "name"], ["id", "name", "type", "text", "pInputText", "", "formControlName", "name"], ["for", "durability"], ["id", "durability", "type", "text", "pInputText", "", "formControlName", "durability"], [1, "p-field", "p-col-12"], ["for", "maxGrade"], ["id", "maxGrade", "mode", "decimal", "formControlName", "maxGrade", 3, "max", "min", "step", "minFractionDigits", "maxFractionDigits"], ["for", "description"], ["id", "description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], ["class", "p-field p-col-12 p-md-6", 4, "ngIf"], [3, "examForm", "creatingExam", "exam", "exams", "examFormChange", "creatingExamChange", "examChange", "examsChange"], ["icon", "pi pi-check", "label", "Create exam", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "Cancel", 1, "p-button-secondary", 3, "click"], ["icon", "pi pi-pencil", "label", "Update exam", 1, "p-button-secondary", 3, "disabled", "click"]], template: function ExamFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Durability (seconds)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Max grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p-inputNumber", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExamFormComponent_div_19_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExamFormComponent_div_20_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExamFormComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExamFormComponent_div_22_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-exam-main-view", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("examFormChange", function ExamFormComponent_Template_app_exam_main_view_examFormChange_23_listener($event) { return ctx.examForm = $event; })("creatingExamChange", function ExamFormComponent_Template_app_exam_main_view_creatingExamChange_23_listener($event) { return ctx.creatingExam = $event; })("examChange", function ExamFormComponent_Template_app_exam_main_view_examChange_23_listener($event) { return ctx.exam = $event; })("examsChange", function ExamFormComponent_Template_app_exam_main_view_examsChange_23_listener($event) { return ctx.exams = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.examForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 5)("min", 0)("step", 0.01)("minFractionDigits", 1)("maxFractionDigits", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 4)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creatingExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creatingExam && ctx.examForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.creatingExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.creatingExam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("examForm", ctx.examForm)("creatingExam", ctx.creatingExam)("exam", ctx.exam)("exams", ctx.exams);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__["InputNumber"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextarea"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _exam_main_view_exam_main_view_component__WEBPACK_IMPORTED_MODULE_14__["ExamMainViewComponent"], primeng_button__WEBPACK_IMPORTED_MODULE_15__["Button"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-form',
                templateUrl: './exam-form.component.html',
                styleUrls: ['./exam-form.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_7__["ExamService"] }, { type: src_app_services_Professor_service__WEBPACK_IMPORTED_MODULE_8__["ProfessorService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, { exams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "bOhx":
/*!**************************************************************************************!*\
  !*** ./src/app/Componentes/professor-interaction/professor-interaction.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProfessorInteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInteractionComponent", function() { return ProfessorInteractionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/sidebar */ "jLSX");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/menu */ "1SLH");




class ProfessorInteractionComponent {
    constructor() {
        this.display = false;
        this.tellAboutDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = [
            { label: 'Manage exam', icon: 'pi pi-book',
                command: (event) => {
                    this.display = false;
                    this.emitDisplay();
                },
                routerLink: ['./manage-exam-view']
            },
            { label: 'Grades', icon: 'pi pi-star',
                command: (event) => {
                    this.display = false;
                    this.emitDisplay();
                },
                routerLink: ['./exam-grade-main-view']
            },
            { label: 'Account', icon: 'pi pi-user-edit',
                command: (event) => {
                    this.display = false;
                    this.emitDisplay();
                }
            }
        ];
    }
    ngOnInit() {
    }
    emitDisplay() {
        this.display = false;
        this.tellAboutDisplay.emit(this.display);
    }
}
ProfessorInteractionComponent.ɵfac = function ProfessorInteractionComponent_Factory(t) { return new (t || ProfessorInteractionComponent)(); };
ProfessorInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorInteractionComponent, selectors: [["app-professor-interaction"]], inputs: { display: "display" }, outputs: { tellAboutDisplay: "tellAboutDisplay" }, decls: 3, vars: 3, consts: [["position", "left", 3, "visible", "modal", "visibleChange", "onHide"], [3, "model"]], template: function ProfessorInteractionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function ProfessorInteractionComponent_Template_p_sidebar_visibleChange_1_listener($event) { return ctx.display = $event; })("onHide", function ProfessorInteractionComponent_Template_p_sidebar_onHide_1_listener() { return ctx.emitDisplay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.display)("modal", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, directives: [primeng_sidebar__WEBPACK_IMPORTED_MODULE_1__["Sidebar"], primeng_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9mZXNzb3ItaW50ZXJhY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-professor-interaction',
                templateUrl: './professor-interaction.component.html',
                styleUrls: ['./professor-interaction.component.css']
            }]
    }], function () { return []; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tellAboutDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "c2ev":
/*!************************************************************************!*\
  !*** ./src/app/Componentes/page-not-found/page-not-found.component.ts ***!
  \************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 4, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "demI":
/*!********************************************!*\
  !*** ./src/app/dto/SelectedResponseDto.ts ***!
  \********************************************/
/*! exports provided: SelectedResponseDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedResponseDto", function() { return SelectedResponseDto; });
/* harmony import */ var _ExamStudentDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamStudentDto */ "yAdQ");
/* harmony import */ var _AnswerOptionDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerOptionDto */ "nPLF");


class SelectedResponseDto {
    constructor() {
        this.id = 0;
        this.valoration = 0.0;
        this.examStudent = new _ExamStudentDto__WEBPACK_IMPORTED_MODULE_0__["ExamStudentDto"];
        this.answerOption = new _AnswerOptionDto__WEBPACK_IMPORTED_MODULE_1__["AnswerOptionDto"];
    }
}


/***/ }),

/***/ "e1f3":
/*!*********************************************!*\
  !*** ./src/app/pipes/question-type.pipe.ts ***!
  \*********************************************/
/*! exports provided: QuestionTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTypePipe", function() { return QuestionTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QuestionTypePipe {
    transform(questionCode) {
        let name;
        if (questionCode === "op") {
            name = "Open question";
        }
        else if (questionCode === "mu") {
            name = "Multiple unique";
        }
        else if (questionCode === "mm") {
            name = "Multiple multiple";
        }
        else {
            name = "Unknown code";
        }
        return name;
    }
}
QuestionTypePipe.ɵfac = function QuestionTypePipe_Factory(t) { return new (t || QuestionTypePipe)(); };
QuestionTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "questionType", type: QuestionTypePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'questionType'
            }]
    }], null, null); })();


/***/ }),

/***/ "hZ11":
/*!************************************************************************!*\
  !*** ./src/app/Componentes/exam-main-view/exam-main-view.component.ts ***!
  \************************************************************************/
/*! exports provided: ExamMainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamMainViewComponent", function() { return ExamMainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var _exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exam-details-view/exam-details-view.component */ "pqXE");
/* harmony import */ var src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/exam.service */ "zZNt");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/weight.pipe */ "rMaZ");














function ExamMainViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Durability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Max grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamMainViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamMainViewComponent_ng_template_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const exam_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editExam(exam_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamMainViewComponent_ng_template_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const exam_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delExam(exam_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamMainViewComponent_ng_template_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const exam_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showExam(exam_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exam_r2.durability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, exam_r2.maxGrade));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingExam);
} }
class ExamMainViewComponent {
    constructor(examService, messageService, dialogService) {
        this.examService = examService;
        this.messageService = messageService;
        this.dialogService = dialogService;
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__["ExamDto"];
        this.creatingExam = true;
        this.exams = new Array();
        this.examChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.examForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.examsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.examFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.creatingExamChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    putExamInfoIntoExamForm(exam) {
        this.examForm.setValue({
            name: exam.name,
            durability: exam.durability,
            maxGrade: exam.maxGrade,
            description: exam.description
        });
        this.examFormChange.emit(this.examForm);
    }
    editExam(exam) {
        this.creatingExam = false;
        this.creatingExamChange.emit(this.creatingExam);
        this.exam = exam;
        this.examChange.emit(this.exam);
        this.putExamInfoIntoExamForm(exam);
    }
    delExam(exam) {
        this.examService.delExam(exam).subscribe(response => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: response.toString() });
            this.exams.splice(this.exams.indexOf(exam), 1);
            this.examsChange.emit(this.exams);
        }, error => console.log(error));
    }
    showExam(exam) {
        this.dialogService.open(_exam_details_view_exam_details_view_component__WEBPACK_IMPORTED_MODULE_5__["ExamDetailsViewComponent"], {
            data: exam,
            header: 'Exam ' + exam.name + ' details',
            width: '70%'
        });
    }
}
ExamMainViewComponent.ɵfac = function ExamMainViewComponent_Factory(t) { return new (t || ExamMainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"])); };
ExamMainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamMainViewComponent, selectors: [["app-exam-main-view"]], inputs: { exams: "exams", exam: "exam", creatingExam: "creatingExam", examForm: "examForm" }, outputs: { examsChange: "examsChange", examChange: "examChange", creatingExamChange: "creatingExamChange", examFormChange: "examFormChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])], decls: 4, vars: 3, consts: [["sortMode", "multiple", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-text", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-text", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-text", 3, "disabled", "click"]], template: function ExamMainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamMainViewComponent_ng_template_2_Template, 9, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExamMainViewComponent_ng_template_3_Template, 12, 8, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.exams)("paginator", true)("rows", 10);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__["Toast"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], pipes: [_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_10__["WeightPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLW1haW4tdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamMainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-main-view',
                templateUrl: './exam-main-view.component.html',
                styleUrls: ['./exam-main-view.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"], primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"]]
            }]
    }], function () { return [{ type: src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_6__["ExamService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }]; }, { exams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], exam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], creatingExam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creatingExamChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], examForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examFormChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "jT+t":
/*!********************************************************************************!*\
  !*** ./src/app/Componentes/answer-option-form/answer-option-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnswerOptionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerOptionFormComponent", function() { return AnswerOptionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/AnswerOptionDto */ "nPLF");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/togglebutton */ "Y+ZO");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _answer_option_main_view_answer_option_main_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../answer-option-main-view/answer-option-main-view.component */ "xCWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/question-type.pipe */ "e1f3");

















function AnswerOptionFormComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_div_21_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveAnsOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.ansOptForm.invalid);
} }
function AnswerOptionFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_div_22_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancelNewAnsOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnswerOptionFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_div_23_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateAnsOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.ansOptForm.invalid);
} }
function AnswerOptionFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_div_24_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cancelUpdateAnsOpt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AnswerOptionFormComponent {
    constructor(formBuilder, ansOptService, config, ref, messageService) {
        this.formBuilder = formBuilder;
        this.ansOptService = ansOptService;
        this.config = config;
        this.ref = ref;
        this.messageService = messageService;
        this.manageAnsOpts = this.config.data.manageAnsOpts;
        this.question = this.config.data.question;
        this.ansOptForm = this.formBuilder.group({
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0.0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5.0)]),
            correctAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2048)])
        });
        this.ansOpt = new src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_3__["AnswerOptionDto"];
        this.creatingAnsOpt = true;
        this.maxWeight = 1;
        if (this.manageAnsOpts.ansOpts.length) {
            this.calculateMaxAvailableGrade();
        }
    }
    ngOnInit() {
        /*(this.question.id !== 0) ? this.setAnsOpts() : false;*/
    }
    subMaxWeight(ansOpt) {
        this.maxWeight -= ansOpt.weight;
        this.maxWeight = Number(this.maxWeight.toPrecision(2));
    }
    calculateMaxAvailableGrade() {
        let maxWeight = 1;
        this.manageAnsOpts.ansOpts.forEach(ansOpt => {
            maxWeight -= ansOpt.weight;
            maxWeight = Number(maxWeight.toPrecision(2));
        });
        this.maxWeight = maxWeight;
    }
    /*
    public setAnsOpts() : void {
      this.ansOptService.getAnsOptByQuestion(this.question.id).subscribe(
        ansOpts => {
          this.ansOpts = ansOpts;
          this.manageAnsOpts.ansOpts = this.ansOpts;
          this.manageAnsOpts.ansOptsCopy = this.ansOpts;
          this.calculateMaxAvailableGrade();
        },
        error => console.log(error)
      );
    }
  */
    resetAnsOptForm() {
        this.ansOptForm.reset({
            weight: 0.0,
            correctAnswer: true,
            description: ''
        });
    }
    extractAnsOptInfoFromAnsOptForm(ansOpt) {
        let ansOptionForm = this.ansOptForm.value;
        ansOpt.weight = ansOptionForm.weight;
        ansOpt.correctAnswer = ansOptionForm.correctAnswer;
        ansOpt.description = ansOptionForm.description;
    }
    saveAnsOpt() {
        let ansOpt = new src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_3__["AnswerOptionDto"];
        this.extractAnsOptInfoFromAnsOptForm(ansOpt);
        ansOpt.question = this.question;
        this.subMaxWeight(ansOpt);
        this.manageAnsOpts.ansOpts.push(ansOpt);
        this.manageAnsOpts.addItemIntoNewAnsOpts(ansOpt);
        this.resetAnsOptForm();
    }
    cancelNewAnsOpt() {
        this.resetAnsOptForm();
    }
    updateAnsOpt() {
        this.extractAnsOptInfoFromAnsOptForm(this.ansOpt);
        let index = this.manageAnsOpts.ansOpts.indexOf(this.ansOpt);
        this.manageAnsOpts.ansOpts.splice(index, 1, this.ansOpt);
        this.manageAnsOpts.addItemIntoUptAnsOpts(this.ansOpt);
        this.creatingAnsOpt = true;
        this.calculateMaxAvailableGrade();
        this.resetAnsOptForm();
    }
    cancelUpdateAnsOpt() {
        this.creatingAnsOpt = true;
        this.subMaxWeight(this.ansOpt);
        this.resetAnsOptForm();
    }
    notValidAnsOpts() {
        // answer options should not be emtpy
        if (!(this.manageAnsOpts.ansOpts.length > 0)) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'Answer options cannot be empty!' });
            return true;
        }
        let atLeastIsThereACorrectAns = false;
        let isThereWeightInNotCorrectAns = false;
        let isThereACorrectAnsOptWithoutWeight = false;
        let multipleUniqueQuestionNumOfCorrecAnsOpts = 0;
        let consideredWeight = 0.0;
        this.manageAnsOpts.ansOpts.forEach(ansOpt => {
            // check if a not correct answer has a weight
            if (ansOpt.correctAnswer && ansOpt.weight === 0) {
                isThereACorrectAnsOptWithoutWeight = true;
            }
            // check if multiple unique question only has a correct answer
            if (this.question.type === "mu" && ansOpt.correctAnswer) {
                multipleUniqueQuestionNumOfCorrecAnsOpts += 1;
            }
            // check if is not there at least one correct answer
            // check if 100 percent weights have been considered with all correct answer
            if (ansOpt.correctAnswer) {
                atLeastIsThereACorrectAns = true;
                consideredWeight += ansOpt.weight;
                consideredWeight = Number(consideredWeight.toPrecision(2));
            }
            // check if a no correct answer has a weight
            if (!ansOpt.correctAnswer && ansOpt.weight !== 0) {
                isThereWeightInNotCorrectAns = true;
            }
        });
        let isAllOk = true;
        if (!atLeastIsThereACorrectAns) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'There should be at least one correct answer!' });
            isAllOk = false;
        }
        if (isThereACorrectAnsOptWithoutWeight) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'A correct answer option should has a weight!' });
            isAllOk = false;
        }
        if (this.question.type === "mu" && multipleUniqueQuestionNumOfCorrecAnsOpts != 1) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'Multiple unique question should has only one correct answer!' });
            isAllOk = false;
        }
        if (isThereWeightInNotCorrectAns) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'There should not be weight in a not correct answer!' });
            isAllOk = false;
        }
        if (consideredWeight !== 1) {
            this.messageService.add({ sticky: true, severity: 'warn', summary: 'Warning', detail: 'You should consider use 100 percent in weight for every correct answer option!' });
            isAllOk = false;
        }
        if (isAllOk) {
            return false;
        }
        else {
            return true;
        }
    }
    accept() {
        if (this.notValidAnsOpts()) {
            return;
        }
        this.ref.close(this.manageAnsOpts);
    }
    cancel() {
        this.ref.close();
    }
}
AnswerOptionFormComponent.ɵfac = function AnswerOptionFormComponent_Factory(t) { return new (t || AnswerOptionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_4__["AnswerOptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
AnswerOptionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswerOptionFormComponent, selectors: [["app-answer-option-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 31, vars: 20, consts: [[1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], [3, "formGroup"], ["for", "ans-opt-weight"], ["id", "ans-opt-weight", "mode", "decimal", "formControlName", "weight", 3, "max", "min", "step", "minFractionDigits", "maxFractionDigits"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "correct-answer"], ["onLabel", "Yes", "offLabel", "No", "formControlName", "correctAnswer"], ["for", "ans-opt-description"], ["id", "ans-opt-description", "pInputTextarea", "", "formControlName", "description", 3, "rows", "autoResize"], ["class", "p-field p-col-12 p-md-6", 4, "ngIf"], [3, "maxWeight", "creatingAnsOpt", "manageAnsOpts", "ansOpt", "ansOptForm", "maxWeightChange", "creatingAnsOptChange", "manageAnsOptsChange", "ansOptChange", "ansOptFormChange"], [1, "p-field", "p-col-6"], ["icon", "pi pi-times", "label", "Accept", 1, "p-button-secondary", 3, "click"], ["icon", "pi pi-times", "label", "Cancel", 1, "p-button-secondary", 3, "click"], ["icon", "pi pi-check", "label", "Create answer", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-pencil", "label", "Update answer", 1, "p-button-secondary", 3, "disabled", "click"]], template: function AnswerOptionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kind of question: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "questionType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p-inputNumber", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Correct answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p-toggleButton", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AnswerOptionFormComponent_div_21_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AnswerOptionFormComponent_div_22_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AnswerOptionFormComponent_div_23_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AnswerOptionFormComponent_div_24_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-answer-option-main-view", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("maxWeightChange", function AnswerOptionFormComponent_Template_app_answer_option_main_view_maxWeightChange_25_listener($event) { return ctx.maxWeight = $event; })("creatingAnsOptChange", function AnswerOptionFormComponent_Template_app_answer_option_main_view_creatingAnsOptChange_25_listener($event) { return ctx.creatingAnsOpt = $event; })("manageAnsOptsChange", function AnswerOptionFormComponent_Template_app_answer_option_main_view_manageAnsOptsChange_25_listener($event) { return ctx.manageAnsOpts = $event; })("ansOptChange", function AnswerOptionFormComponent_Template_app_answer_option_main_view_ansOptChange_25_listener($event) { return ctx.ansOpt = $event; })("ansOptFormChange", function AnswerOptionFormComponent_Template_app_answer_option_main_view_ansOptFormChange_25_listener($event) { return ctx.ansOptForm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_Template_p_button_click_28_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionFormComponent_Template_p_button_click_30_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, ctx.question.type), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ansOptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxWeight)("min", 0)("step", 0.01)("minFractionDigits", 1)("maxFractionDigits", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 4)("autoResize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creatingAnsOpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creatingAnsOpt && ctx.ansOptForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.creatingAnsOpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.creatingAnsOpt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWeight", ctx.maxWeight)("creatingAnsOpt", ctx.creatingAnsOpt)("manageAnsOpts", ctx.manageAnsOpts)("ansOpt", ctx.ansOpt)("ansOptForm", ctx.ansOptForm);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_8__["ToggleButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_9__["InputTextarea"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _answer_option_main_view_answer_option_main_view_component__WEBPACK_IMPORTED_MODULE_11__["AnswerOptionMainViewComponent"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["Button"]], pipes: [_pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_13__["QuestionTypePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnN3ZXItb3B0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerOptionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer-option-form',
                templateUrl: './answer-option-form.component.html',
                styleUrls: ['./answer-option-form.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_4__["AnswerOptionService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_5__["DynamicDialogRef"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "lrpF":
/*!******************************************************************!*\
  !*** ./src/app/Componentes/manage-exam/manage-exam.component.ts ***!
  \******************************************************************/
/*! exports provided: ManageExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageExamComponent", function() { return ManageExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tabview */ "dPl2");
/* harmony import */ var _exam_form_exam_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exam-form/exam-form.component */ "ZStt");
/* harmony import */ var _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question-form/question-form.component */ "QqLy");





class ManageExamComponent {
    constructor() {
        this.exams = new Array();
    }
    ngOnInit() {
    }
}
ManageExamComponent.ɵfac = function ManageExamComponent_Factory(t) { return new (t || ManageExamComponent)(); };
ManageExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageExamComponent, selectors: [["app-manage-exam"]], decls: 5, vars: 2, consts: [["header", "Manage exam"], [3, "exams", "examsChange"], ["header", "Manage questions"], [3, "exams"]], template: function ManageExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-tabPanel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-exam-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("examsChange", function ManageExamComponent_Template_app_exam_form_examsChange_2_listener($event) { return ctx.exams = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-tabPanel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-question-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exams", ctx.exams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exams", ctx.exams);
    } }, directives: [primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], _exam_form_exam_form_component__WEBPACK_IMPORTED_MODULE_2__["ExamFormComponent"], _question_form_question_form_component__WEBPACK_IMPORTED_MODULE_3__["QuestionFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtZXhhbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-exam',
                templateUrl: './manage-exam.component.html',
                styleUrls: ['./manage-exam.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nPLF":
/*!****************************************!*\
  !*** ./src/app/dto/AnswerOptionDto.ts ***!
  \****************************************/
/*! exports provided: AnswerOptionDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerOptionDto", function() { return AnswerOptionDto; });
class AnswerOptionDto {
    constructor() {
        this.id = 0;
        this.description = new String;
        this.correctAnswer = new Boolean;
        this.weight = 0.0;
    }
}


/***/ }),

/***/ "oM8s":
/*!****************************************************************************************************!*\
  !*** ./src/app/Componentes/exam-student-response-detail/exam-student-response-detail.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExamStudentResponseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudentResponseDetailComponent", function() { return ExamStudentResponseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/ExamStudentDto */ "yAdQ");
/* harmony import */ var _exam_studen_open_response_exam_studen_open_response_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exam-studen-open-response/exam-studen-open-response.component */ "0p9f");
/* harmony import */ var _exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exam-studen-selected-response/exam-studen-selected-response.component */ "C4M3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/exam-student.service */ "qIA5");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/question-type.pipe */ "e1f3");














function ExamStudentResponseDetailComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Student responses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamStudentResponseDetailComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-sortIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kind of question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-sortIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamStudentResponseDetailComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "questionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamStudentResponseDetailComponent_ng_template_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const question_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showStudentResponse(question_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r3.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, question_r3.type));
} }
class ExamStudentResponseDetailComponent {
    constructor(activatedRoute, examStudentService, questionService, dialogService) {
        this.activatedRoute = activatedRoute;
        this.examStudentService = examStudentService;
        this.questionService = questionService;
        this.dialogService = dialogService;
        this.examStudent = new src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_2__["ExamStudentDto"];
        this.questions = new Array();
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            this.getExamStudent(Number(param.get('examStudentId')));
        });
    }
    getExamStudent(examStudentId) {
        this.examStudentService.getExamStudent(examStudentId).subscribe(examStudent => {
            this.examStudent = examStudent;
            this.getQuestions(this.examStudent.exam.id);
        }, error => console.log(error));
    }
    getQuestions(examId) {
        this.questionService.getQuestionByExam(examId).subscribe(questions => this.questions = questions, error => console.log(error));
    }
    showStudentResponse(selectedQuestion) {
        // Open question
        if (selectedQuestion.type === 'op') {
            let ref = this.dialogService.open(_exam_studen_open_response_exam_studen_open_response_component__WEBPACK_IMPORTED_MODULE_3__["ExamStudenOpenResponseComponent"], {
                data: { selectedQuestion: selectedQuestion, examStudent: this.examStudent },
                header: 'Student open response details',
                width: '70%'
            });
            ref.onClose.subscribe((examStudent) => {
                if (examStudent) {
                    this.examStudent = examStudent;
                }
            });
        }
        // Multiple unique question
        else if (selectedQuestion.type === 'mu') {
            this.dialogService.open(_exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_4__["ExamStudenSelectedResponseComponent"], {
                data: { selectedQuestion: selectedQuestion, examStudent: this.examStudent },
                header: 'Student unique selected response details',
                width: '70%'
            });
        }
        // Multiple multiple questiond
        else {
            this.dialogService.open(_exam_studen_selected_response_exam_studen_selected_response_component__WEBPACK_IMPORTED_MODULE_4__["ExamStudenSelectedResponseComponent"], {
                data: { selectedQuestion: selectedQuestion, examStudent: this.examStudent },
                header: 'Student multiple selected response details',
                width: '70%'
            });
        }
    }
}
ExamStudentResponseDetailComponent.ɵfac = function ExamStudentResponseDetailComponent_Factory(t) { return new (t || ExamStudentResponseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_6__["ExamStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
ExamStudentResponseDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamStudentResponseDetailComponent, selectors: [["app-exam-student-response-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 17, vars: 7, consts: [[3, "value", "paginator", "rows"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "table-header"], ["pSortableColumn", "identificationCard"], ["field", "identificationCard"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "lastname"], ["field", "lastname"], ["pButton", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-text", 3, "click"]], template: function ExamStudentResponseDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Student: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Identification card: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Definitive grade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExamStudentResponseDetailComponent_ng_template_14_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExamStudentResponseDetailComponent_ng_template_15_Template, 12, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExamStudentResponseDetailComponent_ng_template_16_Template, 10, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.examStudent.student.name, " ", ctx.examStudent.student.lastname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.examStudent.student.identificationCard, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.examStudent.definitiveGrade, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.questions)("paginator", true)("rows", 10);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["SortIcon"], primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonDirective"]], pipes: [_pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_11__["QuestionTypePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLXN0dWRlbnQtcmVzcG9uc2UtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamStudentResponseDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-student-response-detail',
                templateUrl: './exam-student-response-detail.component.html',
                styleUrls: ['./exam-student-response-detail.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_6__["ExamStudentService"] }, { type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "pj9s":
/*!***************************************************!*\
  !*** ./src/app/services/open-response.service.ts ***!
  \***************************************************/
/*! exports provided: OpenResponseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenResponseService", function() { return OpenResponseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class OpenResponseService {
    constructor(http) {
        this.http = http;
    }
    getQuestions() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'openResponse/all');
    }
    getOpenResponsesByExamStudentAndQuestion(examStudentId, questionId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL +
            'openResponse/byexamstudentandquestion/?examStudentId=' + examStudentId + '&questionId=' + questionId);
    }
    saveOpenResponse(openResponse) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'openResponse', openResponse);
    }
    updateOpenResponse(openResponse) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'openResponse', openResponse);
    }
    delOpenResponse(openResponse) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'openResponse/' + openResponse.id, { responseType: 'text' });
    }
}
OpenResponseService.ɵfac = function OpenResponseService_Factory(t) { return new (t || OpenResponseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OpenResponseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpenResponseService, factory: OpenResponseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenResponseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pqXE":
/*!******************************************************************************!*\
  !*** ./src/app/Componentes/exam-details-view/exam-details-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExamDetailsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamDetailsViewComponent", function() { return ExamDetailsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var _ans_opts_details_ans_opts_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ans-opts-details/ans-opts-details.component */ "/nTU");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/question-type.pipe */ "e1f3");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/weight.pipe */ "rMaZ");














function ExamDetailsViewComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kind of question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View answer options details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamDetailsViewComponent_ng_template_26_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} if (rf & 2) {
    const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", question_r2.questionImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExamDetailsViewComponent_ng_template_26_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamDetailsViewComponent_ng_template_26_td_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const question_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.setAnswerOpts(question_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExamDetailsViewComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExamDetailsViewComponent_ng_template_26_img_2_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "questionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExamDetailsViewComponent_ng_template_26_td_11_Template, 2, 0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r2.questionImage !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, question_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, question_r2.weight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r2.type !== "op");
} }
class ExamDetailsViewComponent {
    constructor(questionService, ansOptService, config, dialogService) {
        this.questionService = questionService;
        this.ansOptService = ansOptService;
        this.config = config;
        this.dialogService = dialogService;
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_2__["ExamDto"];
        this.questions = new Array();
        this.ansOpts = new Array();
    }
    ngOnInit() {
        this.exam = this.config.data;
        this.getQuestions();
    }
    getQuestions() {
        this.questionService.getQuestionByExam(this.exam.id).subscribe(questions => {
            let QUESTION_INDEX = 0;
            questions.forEach(question => {
                question.questionImage = question.questionImage !== "" ? `http://localhost:8090/question/getImage/?filename=${question.questionImage}` : "";
                this.questions.push(question);
                question;
                QUESTION_INDEX += 1;
            });
        }, error => console.log(error));
    }
    viewAnsOptDetails() {
        this.dialogService.open(_ans_opts_details_ans_opts_details_component__WEBPACK_IMPORTED_MODULE_3__["AnsOptsDetailsComponent"], {
            data: this.ansOpts,
            header: 'Answer options details',
            width: '70%'
        });
    }
    setAnswerOpts(selectedQuestion) {
        this.ansOptService.getAnsOptByQuestion(selectedQuestion.id).subscribe(ansOpts => {
            this.ansOpts = ansOpts;
            this.viewAnsOptDetails();
        }, error => console.log(error));
    }
}
ExamDetailsViewComponent.ɵfac = function ExamDetailsViewComponent_Factory(t) { return new (t || ExamDetailsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_5__["AnswerOptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
ExamDetailsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamDetailsViewComponent, selectors: [["app-exam-details-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 27, vars: 10, consts: [["sortMode", "multiple", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["height", "25", 3, "src", 4, "ngIf"], [4, "ngIf"], ["height", "25", 3, "src"], ["pButton", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-text", 3, "click"]], template: function ExamDetailsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Professor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Exam name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Max grade: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Durability: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExamDetailsViewComponent_ng_template_25_Template, 11, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ExamDetailsViewComponent_ng_template_26_Template, 12, 9, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.exam.professor.name, " ", ctx.exam.professor.lastname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.exam.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.exam.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.exam.link, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.exam.maxGrade, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.exam.durability, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.questions)("paginator", true)("rows", 10);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], pipes: [_pipes_question_type_pipe__WEBPACK_IMPORTED_MODULE_10__["QuestionTypePipe"], _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_11__["WeightPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLWRldGFpbHMtdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamDetailsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exam-details-view',
                templateUrl: './exam-details-view.component.html',
                styleUrls: ['./exam-details-view.component.css'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_5__["AnswerOptionService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DynamicDialogConfig"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "qIA5":
/*!**************************************************!*\
  !*** ./src/app/services/exam-student.service.ts ***!
  \**************************************************/
/*! exports provided: ExamStudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudentService", function() { return ExamStudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ExamStudentService {
    constructor(http) {
        this.http = http;
    }
    getExamStudents() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent/all');
    }
    getExamStudent(examStudentId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent/' + examStudentId);
    }
    getExamStudentsByExam(examId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent/byexam/?id=' + examId);
    }
    getExamStudentsByStudent(studentId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent/bystudent/?id=' + studentId);
    }
    saveExamStudent(examStudent) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent', examStudent);
    }
    updateExamStudent(examStudent) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent', examStudent);
    }
    delExamStudent(examStudent) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'examStudent/' + examStudent.id, { responseType: 'text' });
    }
}
ExamStudentService.ɵfac = function ExamStudentService_Factory(t) { return new (t || ExamStudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ExamStudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamStudentService, factory: ExamStudentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamStudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "qk8R":
/*!********************************!*\
  !*** ./src/app/dto/ExamDto.ts ***!
  \********************************/
/*! exports provided: ExamDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamDto", function() { return ExamDto; });
/* harmony import */ var _ProfessorDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfessorDto */ "TuCJ");

class ExamDto {
    constructor() {
        this.id = 0;
        this.professor = new _ProfessorDto__WEBPACK_IMPORTED_MODULE_0__["ProfessorDto"];
        this.description = new String;
        this.link = new String;
        this.maxGrade = 0.0;
        this.name = new String;
        this.durability = 0;
    }
}


/***/ }),

/***/ "rMaZ":
/*!**************************************!*\
  !*** ./src/app/pipes/weight.pipe.ts ***!
  \**************************************/
/*! exports provided: WeightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightPipe", function() { return WeightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WeightPipe {
    transform(weight) {
        let data = "";
        data = (weight == 1) ? "100%" : (weight * 100).toPrecision(2) + '%';
        return data;
    }
}
WeightPipe.ɵfac = function WeightPipe_Factory(t) { return new (t || WeightPipe)(); };
WeightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "weight", type: WeightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'weight'
            }]
    }], null, null); })();


/***/ }),

/***/ "t2Ns":
/*!****************************************************************!*\
  !*** ./src/app/Componentes/solve-exam/solve-exam.component.ts ***!
  \****************************************************************/
/*! exports provided: SolveExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveExamComponent", function() { return SolveExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dto/AnswerOptionDto */ "nPLF");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/ExamStudentDto */ "yAdQ");
/* harmony import */ var src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dto/OpenQuestionDto */ "BMxT");
/* harmony import */ var src_app_dto_OpenResponseDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/OpenResponseDto */ "x/Fh");
/* harmony import */ var src_app_dto_SelectedResponseDto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dto/SelectedResponseDto */ "demI");
/* harmony import */ var src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dto/StudentDto */ "5NrR");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/answer-option.service */ "6UBZ");
/* harmony import */ var src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/exam-student.service */ "qIA5");
/* harmony import */ var src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/open-response.service */ "pj9s");
/* harmony import */ var src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/selected-response.service */ "6Baw");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ "zFJ7");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ "LuMj");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "jIHw");
























function SolveExamComponent_div_1_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SolveExamComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolveExamComponent_div_1_div_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.question.description, "");
} }
function SolveExamComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Your response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.openResponseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", 4)("autoResize", true);
} }
function SolveExamComponent_div_1_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SolveExamComponent_div_1_div_3_div_1_Template_p_radioButton_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.selectedAnsOpt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputId", ansOpt_r12.id.toString())("value", ansOpt_r12)("ngModel", ctx_r11.selectedAnsOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ansOpt_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r12.description);
} }
function SolveExamComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolveExamComponent_div_1_div_3_div_1_Template, 4, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.loadedAnsOpts);
} }
function SolveExamComponent_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SolveExamComponent_div_1_div_4_div_1_Template_p_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.selectedAnsOpts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputId", ansOpt_r16.id.toString())("value", ansOpt_r16)("ngModel", ctx_r15.selectedAnsOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ansOpt_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r16.description);
} }
function SolveExamComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolveExamComponent_div_1_div_4_div_1_Template, 4, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.loadedAnsOpts);
} }
function SolveExamComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolveExamComponent_div_1_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SolveExamComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolveExamComponent_div_1_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SolveExamComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SolveExamComponent_div_1_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.saveExamStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SolveExamComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolveExamComponent_div_1_div_1_Template, 4, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SolveExamComponent_div_1_div_2_Template, 7, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SolveExamComponent_div_1_div_3_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SolveExamComponent_div_1_div_4_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SolveExamComponent_div_1_div_5_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SolveExamComponent_div_1_div_6_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SolveExamComponent_div_1_div_7_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.question.id !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.question.type === "op");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.question.type === "mu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.question.type === "mm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionIndex - 1 >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionIndex + 1 < ctx_r0.questions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.questionIndex + 1 === ctx_r0.questions.length);
} }
function SolveExamComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your final grade is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.examStudent.definitiveGrade, "\n");
} }
function SolveExamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have been replied to this exam, wait for you final grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SolveExamComponent {
    constructor(questionService, ansOptService, examStudentService, openResponseService, selectedResponseService, formBuilder, messageService) {
        this.questionService = questionService;
        this.ansOptService = ansOptService;
        this.examStudentService = examStudentService;
        this.openResponseService = openResponseService;
        this.selectedResponseService = selectedResponseService;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_4__["ExamDto"];
        this.student = new src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_9__["StudentDto"];
        this.examStudent = new src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_5__["ExamStudentDto"];
        this.questions = new Array();
        this.question = new src_app_dto_OpenQuestionDto__WEBPACK_IMPORTED_MODULE_6__["OpenQuestionDto"];
        this.question.type = "";
        this.questionIndex = 0;
        this.ansOpts = [];
        this.loadedAnsOpts = new Array();
        this.maxGrade = 5.0;
        this.responses = [];
        this.openResponseForm = this.formBuilder.group({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2048)])
        });
        this.selectedAnsOpt = new src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_3__["AnswerOptionDto"];
        this.selectedAnsOpts = new Array();
        this.imgUrl = "";
        this.thereWereOpenQuestion = false;
        this.examHasBeenEnded = false;
    }
    ngOnInit() {
        this.questionService.getQuestionByExam(this.exam.id).subscribe(questions => {
            this.questions = questions;
            (this.questions.length > 0) ? this.setFirstQuestion() : false;
            this.setResponses();
        }, error => console.log(error));
    }
    getImage(question) {
        if (question.questionImage === "") {
            return;
        }
        this.questionService.getImage(question.questionImage).subscribe(image => {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                this.imgUrl = reader.result;
            };
        }, error => console.error(error));
    }
    resetImage() {
        this.imgUrl = "";
    }
    setFirstQuestion() {
        let FIRST_QUESTION = 0;
        this.questionIndex = FIRST_QUESTION;
        this.question = this.questions[FIRST_QUESTION];
        if (this.question.questionImage !== "") {
            this.getImage(this.question);
        }
        // if question type is not open question, set answer options
        (this.question.type !== 'op') ? this.getAnsOpts(this.question) : false;
    }
    setResponses() {
        this.questions.forEach(question => this.responses.push([]));
    }
    getAnsOpts(question) {
        this.ansOptService.getAnsOptByQuestion(question.id).subscribe(ansOpts => {
            this.ansOpts.push({ question: question, ansOpts: ansOpts });
            this.loadAnsOpts();
        }, error => console.log(error));
    }
    setOpenResponseInfo(openResponse) {
        let openResponseForm = this.openResponseForm.value;
        openResponse.content = openResponseForm.content;
        openResponse.examStudent = this.examStudent;
        openResponse.question = this.question;
        openResponse.valoration = 0.0;
    }
    addOpenResponse() {
        let openResponseExist = !(this.responses[this.questionIndex].length === 0);
        let response;
        let RESPONSE = 0;
        if (openResponseExist) {
            response = this.responses[this.questionIndex][RESPONSE];
            this.setOpenResponseInfo(response);
            this.responses[this.questionIndex][RESPONSE] = response;
        }
        else {
            response = new src_app_dto_OpenResponseDto__WEBPACK_IMPORTED_MODULE_7__["OpenResponseDto"];
            this.setOpenResponseInfo(response);
            this.responses[this.questionIndex].push(response);
        }
    }
    loadOpenResponseInfoIntoOpenResponseForm(openResponse) {
        this.openResponseForm.setValue({
            content: openResponse.content
        });
    }
    clearOpenResponseForm() {
        this.openResponseForm.reset({
            content: ''
        });
    }
    loadOpenResponse() {
        if (this.responses[this.questionIndex].length > 0) {
            let RESPONSE = 0;
            let savedOpenResponse = this.responses[this.questionIndex][RESPONSE];
            this.loadOpenResponseInfoIntoOpenResponseForm(savedOpenResponse);
        }
    }
    addMultiUniqueResponse() {
        let multiUniqueResponseExist = !(this.responses[this.questionIndex].length === 0);
        if (multiUniqueResponseExist) {
            let RESPONSE = 0;
            this.responses[this.questionIndex][RESPONSE] = this.selectedAnsOpt;
        }
        else {
            this.responses[this.questionIndex].push(this.selectedAnsOpt);
        }
    }
    loadMultiUniqueResponse() {
        let multiUniqueResponseExist = !(this.responses[this.questionIndex].length === 0);
        if (multiUniqueResponseExist) {
            let RESPONSE = 0;
            this.selectedAnsOpt = this.responses[this.questionIndex][RESPONSE];
        }
    }
    addeMultiMultiResponse() {
        this.responses[this.questionIndex] = this.selectedAnsOpts;
    }
    loadMultiMultiResponse() {
        this.selectedAnsOpts = this.responses[this.questionIndex];
    }
    loadAnsOpts() {
        for (let i = 0; i < this.ansOpts.length; i++) {
            let pair = this.ansOpts[i];
            if (pair.question === this.question) {
                this.loadedAnsOpts = pair.ansOpts;
                return true;
            }
        }
        return false;
    }
    checkAndLoadAnsOpts() {
        let existAnsOpts = false;
        existAnsOpts = this.loadAnsOpts();
        (!existAnsOpts) ? this.getAnsOpts(this.question) : false;
    }
    addStudentResponse() {
        if (this.question.type === "op") {
            this.addOpenResponse();
            this.clearOpenResponseForm();
        }
        else if (this.question.type === "mu") {
            this.addMultiUniqueResponse();
        } // mm question type
        else {
            this.addeMultiMultiResponse();
        }
    }
    processStudentResponses(questionIndexOperation) {
        /* adding student answer of current question */
        this.addStudentResponse();
        /* loading student answer of next/back question if it exist */
        this.questionIndex += questionIndexOperation;
        this.question = this.questions[this.questionIndex];
        this.resetImage();
        this.getImage(this.question);
        if (this.question.type === "op") {
            this.loadOpenResponse();
        }
        else if (this.question.type === "mu") {
            this.checkAndLoadAnsOpts();
            this.loadMultiUniqueResponse();
        } // mm question type
        else {
            this.checkAndLoadAnsOpts();
            this.loadMultiMultiResponse();
        }
    }
    back() {
        this.processStudentResponses(-1);
    }
    next() {
        this.processStudentResponses(1);
    }
    saveOpenResponse(openResponse) {
        this.openResponseService.saveOpenResponse(openResponse).subscribe(openResponse => openResponse, error => console.log(error));
    }
    saveSelectedResponse(selectedResponse) {
        this.selectedResponseService.saveSelectedResponse(selectedResponse).subscribe(selectedResponse => selectedResponse, error => console.log(error));
    }
    setSelectedResponseInfo(question, selectedResponse, selectedAnsOpt) {
        selectedResponse.valoration = question.weight * selectedAnsOpt.weight * this.maxGrade;
        selectedResponse.examStudent = this.examStudent;
        selectedResponse.answerOption = selectedAnsOpt;
    }
    saveExamStudent() {
        this.examStudentService.saveExamStudent(this.examStudent).subscribe(examStudent => {
            this.examStudent = examStudent;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your response to this exam has been saved' });
            this.saveStudentResponses();
        }, error => {
            console.log(error);
            this.messageService.add({ sticky: true, severity: 'error', summary: 'Error', detail: 'There was error saving you exam response!' });
        });
    }
    updateExamStudent() {
        this.examStudentService.updateExamStudent(this.examStudent).subscribe(examStudent => this.examStudent = examStudent, error => console.log(error));
    }
    saveStudentResponses() {
        this.addStudentResponse();
        let QUESTION_INDEX = 0;
        let studentGrade = 0.0;
        this.questions.forEach(question => {
            // save OPen responses
            if (question.type === "op") {
                let OPEN_RESPONSE_INDEX = 0;
                let openResponse = this.responses[QUESTION_INDEX][OPEN_RESPONSE_INDEX];
                openResponse.examStudent = this.examStudent;
                studentGrade += question.weight * openResponse.valoration;
                this.saveOpenResponse(openResponse);
                this.thereWereOpenQuestion = true;
            }
            // save Multple Unique response
            else if (question.type === "mu") {
                let UNIQUE_RESPONSE_INDEX = 0;
                let selectedResponse = new src_app_dto_SelectedResponseDto__WEBPACK_IMPORTED_MODULE_8__["SelectedResponseDto"];
                let selectedAnsOpt = this.responses[QUESTION_INDEX][UNIQUE_RESPONSE_INDEX];
                this.setSelectedResponseInfo(question, selectedResponse, selectedAnsOpt);
                studentGrade += selectedResponse.valoration;
                this.saveSelectedResponse(selectedResponse);
            }
            // save Multiple Multiple responses
            else {
                this.responses[QUESTION_INDEX].forEach(selectedAnsOPt => {
                    let selectedResponse = new src_app_dto_SelectedResponseDto__WEBPACK_IMPORTED_MODULE_8__["SelectedResponseDto"];
                    this.setSelectedResponseInfo(question, selectedResponse, selectedAnsOPt);
                    studentGrade += selectedResponse.valoration;
                    this.saveSelectedResponse(selectedResponse);
                });
            }
            QUESTION_INDEX += 1;
        });
        this.examStudent.definitiveGrade = studentGrade;
        this.updateExamStudent();
        this.questions = new Array();
        this.examHasBeenEnded = true;
    }
}
SolveExamComponent.ɵfac = function SolveExamComponent_Factory(t) { return new (t || SolveExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_10__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_11__["AnswerOptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_12__["ExamStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_13__["OpenResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_14__["SelectedResponseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
SolveExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolveExamComponent, selectors: [["app-solve-exam"]], inputs: { exam: "exam", student: "student", examStudent: "examStudent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "left_button", 4, "ngIf"], ["class", "right_button", 4, "ngIf"], ["height", "25", 3, "src", 4, "ngIf"], ["height", "25", 3, "src"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["for", "content"], ["id", "content", "pInputTextarea", "", "formControlName", "content", 3, "rows", "autoResize"], ["class", "p-field-radiobutton", 4, "ngFor", "ngForOf"], [1, "p-field-radiobutton"], ["name", "multipleUniqueGroup", 3, "inputId", "value", "ngModel", "ngModelChange"], [3, "for"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], ["name", "multipleMultipleGroup", 3, "inputId", "value", "ngModel", "ngModelChange"], [1, "left_button"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", 1, "p-button-text", 3, "click"], [1, "right_button"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-right", 1, "p-button-text", 3, "click"], ["pButton", "", "type", "button", "value", "Send responses", "icon", "pi pi-check", 3, "click"]], template: function SolveExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SolveExamComponent_div_1_Template, 8, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SolveExamComponent_div_2_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SolveExamComponent_div_3_Template, 3, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questions.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examHasBeenEnded && !ctx.thereWereOpenQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examHasBeenEnded && ctx.thereWereOpenQuestion);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_15__["Toast"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__["InputTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_19__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonDirective"]], styles: [".left_button[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    float: left;\r\n    size: 1em;\r\n}\r\n\r\n.right_button[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    float: right;\r\n    size: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbHZlLWV4YW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0FBQ2IiLCJmaWxlIjoic29sdmUtZXhhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRfYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgc2l6ZTogMWVtO1xyXG59XHJcblxyXG4ucmlnaHRfYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHNpemU6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolveExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solve-exam',
                templateUrl: './solve-exam.component.html',
                styleUrls: ['./solve-exam.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_10__["QuestionService"] }, { type: src_app_services_answer_option_service__WEBPACK_IMPORTED_MODULE_11__["AnswerOptionService"] }, { type: src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_12__["ExamStudentService"] }, { type: src_app_services_open_response_service__WEBPACK_IMPORTED_MODULE_13__["OpenResponseService"] }, { type: src_app_services_selected_response_service__WEBPACK_IMPORTED_MODULE_14__["SelectedResponseService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, { exam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], student: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], examStudent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "utYF":
/*!***********************************************!*\
  !*** ./src/app/services/Professor.service.ts ***!
  \***********************************************/
/*! exports provided: ProfessorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorService", function() { return ProfessorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProfessorService {
    constructor(http) {
        this.http = http;
    }
    getProfessors() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'professor');
    }
    getByUsername(username) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'professor/byusername/?username=' + username);
    }
    saveProfessor(professor) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'professor', professor);
    }
    updateProfessor(professor) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'professor', professor);
    }
    delProfessor(professor) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'professor/' + professor.id, { responseType: 'text' });
    }
}
ProfessorService.ɵfac = function ProfessorService_Factory(t) { return new (t || ProfessorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfessorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfessorService, factory: ProfessorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "v0oZ":
/*!********************************************************************!*\
  !*** ./src/app/Componentes/student-form/student-form.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function() { return StudentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dto/ExamDto */ "qk8R");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dto/StudentDto */ "5NrR");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dto/ExamStudentDto */ "yAdQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/exam.service */ "zZNt");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/exam-student.service */ "qIA5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _solve_exam_solve_exam_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../solve-exam/solve-exam.component */ "t2Ns");





















function StudentFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your final grade was: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.examStudent.definitiveGrade, "\n");
} }
function StudentFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Exam could not be found! check your URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentFormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Exam description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.exam.description, " ");
} }
function StudentFormComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentFormComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentFormComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_div_3_div_10_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.queryStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.studentForm.invalid);
} }
function StudentFormComponent_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_div_3_div_11_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.createStudent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.studentForm.invalid);
} }
function StudentFormComponent_div_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentFormComponent_div_3_div_12_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.startExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.studentForm.invalid);
} }
function StudentFormComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-toast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Identification card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-inputNumber", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentFormComponent_div_3_div_8_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentFormComponent_div_3_div_9_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StudentFormComponent_div_3_div_10_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentFormComponent_div_3_div_11_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentFormComponent_div_3_div_12_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.studentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.student.id === 0 && !ctx_r3.isQueryingStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.student.id === 0 && !ctx_r3.isQueryingStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isQueryingStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.student.id === 0 && !ctx_r3.isQueryingStudent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.student.id !== 0);
} }
function StudentFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-solve-exam", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exam", ctx_r4.exam)("student", ctx_r4.student)("examStudent", ctx_r4.examStudent);
} }
class StudentFormComponent {
    constructor(route, formBuilder, examService, studentService, examStudentService, messageService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.examService = examService;
        this.studentService = studentService;
        this.examStudentService = examStudentService;
        this.messageService = messageService;
        this.exam = new src_app_dto_ExamDto__WEBPACK_IMPORTED_MODULE_1__["ExamDto"];
        route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(p => p.id)).subscribe(param => {
            this.getExamByLink(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlExams + param);
        });
        this.studentForm = this.formBuilder.group({
            identificationCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('student name', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('student lastname', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.isQueryingStudent = true;
        this.student = new src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_5__["StudentDto"];
        this.examStudent = new src_app_dto_ExamStudentDto__WEBPACK_IMPORTED_MODULE_7__["ExamStudentDto"];
        this.examStarted = false;
    }
    ngOnInit() {
    }
    checkIfStudentHasAreply() {
        this.examStudentService.getExamStudentsByStudent(this.student.id).subscribe(examStudent => {
            if (examStudent && examStudent.exam.id === this.exam.id) {
                this.examStudent = examStudent;
            }
            else {
                this.isQueryingStudent = false;
            }
        }, error => console.log(error));
    }
    getExamByLink(link) {
        this.examService.getExamByLink(link).subscribe(exam => this.exam = exam, error => console.log(error));
    }
    extracInfoFromStudentForm(student) {
        let studentForm = this.studentForm.value;
        student.identificationCard = studentForm.identificationCard;
        student.name = studentForm.name;
        student.lastname = studentForm.lastname;
    }
    queryStudent() {
        let student = new src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_5__["StudentDto"];
        this.extracInfoFromStudentForm(student);
        this.studentService.getStudentByIdentificationCard(student.identificationCard).subscribe(student => {
            this.student = student;
            this.checkIfStudentHasAreply();
        }, error => console.log(error));
    }
    createStudent() {
        let student = new src_app_dto_StudentDto__WEBPACK_IMPORTED_MODULE_5__["StudentDto"];
        this.extracInfoFromStudentForm(student);
        this.studentService.saveStudent(student).subscribe(student => {
            this.student = student;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Student logged up successfully' });
        }, error => {
            console.log(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Student was not logged up' });
        });
    }
    startExam() {
        this.examStudent.exam = this.exam;
        this.examStudent.student = this.student;
        this.examStarted = true;
    }
}
StudentFormComponent.ɵfac = function StudentFormComponent_Factory(t) { return new (t || StudentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_9__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_11__["ExamStudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
StudentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentFormComponent, selectors: [["app-student-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])], decls: 5, vars: 5, consts: [[4, "ngIf"], ["class", "p-field p-col-12 p-md-12", 4, "ngIf"], [1, "p-field", "p-col-12", "p-md-12"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["for", "identificationCard"], ["id", "identificationCard", "formControlName", "identificationCard", 3, "min"], ["class", "p-field p-col-12 p-md-6", 4, "ngIf"], [1, "p-field", "p-col-12", "p-md-6"], ["for", "student-name"], ["id", "student-name", "type", "text", "pInputText", "", "formControlName", "name"], ["for", "student-lastname"], ["id", "student-lastname", "type", "text", "pInputText", "", "formControlName", "lastname"], ["icon", "pi pi-check", "label", "Query student", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-check", "label", "Log up student", 1, "p-button-secondary", 3, "disabled", "click"], ["icon", "pi pi-check", "label", "Start exam", 1, "p-button-secondary", 3, "disabled", "click"], [3, "exam", "student", "examStudent"]], template: function StudentFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentFormComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentFormComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentFormComponent_div_2_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentFormComponent_div_3_Template, 13, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudentFormComponent_div_4_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examStudent.id !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exam.id === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exam.id !== 0 && ctx.student.id !== 0 && !ctx.examStarted && ctx.examStudent.id === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exam.id !== 0 && !ctx.examStarted && ctx.examStudent.id === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.examStarted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], primeng_toast__WEBPACK_IMPORTED_MODULE_13__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_16__["Button"], _solve_exam_solve_exam_component__WEBPACK_IMPORTED_MODULE_17__["SolveExamComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-form',
                templateUrl: './student-form.component.html',
                styleUrls: ['./student-form.component.css'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_exam_service__WEBPACK_IMPORTED_MODULE_9__["ExamService"] }, { type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"] }, { type: src_app_services_exam_student_service__WEBPACK_IMPORTED_MODULE_11__["ExamStudentService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Componentes_create_professor_create_professor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Componentes/create-professor/create-professor.component */ "P47t");
/* harmony import */ var _Componentes_manage_exam_manage_exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Componentes/manage-exam/manage-exam.component */ "lrpF");
/* harmony import */ var _Componentes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Componentes/page-not-found/page-not-found.component */ "c2ev");
/* harmony import */ var _Componentes_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Componentes/student-form/student-form.component */ "v0oZ");
/* harmony import */ var _Componentes_professor_main_view_professor_main_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Componentes/professor-main-view/professor-main-view.component */ "3USH");
/* harmony import */ var _Componentes_exam_grade_main_view_exam_grade_main_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Componentes/exam-grade-main-view/exam-grade-main-view.component */ "1aR0");
/* harmony import */ var _Componentes_exam_students_responses_exam_students_responses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Componentes/exam-students-responses/exam-students-responses.component */ "EhXC");
/* harmony import */ var _Componentes_exam_student_response_detail_exam_student_response_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Componentes/exam-student-response-detail/exam-student-response-detail.component */ "oM8s");












const routes = [
    { path: 'create-professor', component: _Componentes_create_professor_create_professor_component__WEBPACK_IMPORTED_MODULE_2__["CreateProfessorComponent"] },
    { path: 'professor-main-view', component: _Componentes_professor_main_view_professor_main_view_component__WEBPACK_IMPORTED_MODULE_6__["ProfessorMainViewComponent"],
        children: [
            { path: 'manage-exam-view', component: _Componentes_manage_exam_manage_exam_component__WEBPACK_IMPORTED_MODULE_3__["ManageExamComponent"] },
            { path: 'exam-grade-main-view', component: _Componentes_exam_grade_main_view_exam_grade_main_view_component__WEBPACK_IMPORTED_MODULE_7__["ExamGradeMainViewComponent"] },
            { path: 'exam-students-view', component: _Componentes_exam_students_responses_exam_students_responses_component__WEBPACK_IMPORTED_MODULE_8__["ExamStudentsResponsesComponent"] },
            { path: 'exam-student-response-detail', component: _Componentes_exam_student_response_detail_exam_student_response_detail_component__WEBPACK_IMPORTED_MODULE_9__["ExamStudentResponseDetailComponent"] }
        ]
    },
    { path: 'present-exam/:id', component: _Componentes_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_5__["StudentFormComponent"] },
    { path: '', redirectTo: 'professor-main-view', pathMatch: 'full' },
    { path: '**', component: _Componentes_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x/Fh":
/*!****************************************!*\
  !*** ./src/app/dto/OpenResponseDto.ts ***!
  \****************************************/
/*! exports provided: OpenResponseDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenResponseDto", function() { return OpenResponseDto; });
/* harmony import */ var _ExamStudentDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamStudentDto */ "yAdQ");
/* harmony import */ var _OpenQuestionDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenQuestionDto */ "BMxT");


class OpenResponseDto {
    constructor() {
        this.id = 0;
        this.valoration = 0.0;
        this.content = "";
        this.examStudent = new _ExamStudentDto__WEBPACK_IMPORTED_MODULE_0__["ExamStudentDto"];
        this.question = new _OpenQuestionDto__WEBPACK_IMPORTED_MODULE_1__["OpenQuestionDto"];
    }
}


/***/ }),

/***/ "xCWq":
/*!******************************************************************************************!*\
  !*** ./src/app/Componentes/answer-option-main-view/answer-option-main-view.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AnswerOptionMainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerOptionMainViewComponent", function() { return AnswerOptionMainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dto/AnswerOptionDto */ "nPLF");
/* harmony import */ var src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tools/manageAnsOpts */ "Y0xo");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/weight.pipe */ "rMaZ");
/* harmony import */ var _pipes_correctAns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/correctAns */ "P/bm");











function AnswerOptionMainViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Is correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnswerOptionMainViewComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "correctAns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionMainViewComponent_ng_template_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ansOpt_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.updateAnsOpt(ansOpt_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerOptionMainViewComponent_ng_template_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ansOpt_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delAnsOpt(ansOpt_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ansOpt_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ansOpt_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ansOpt_r2.weight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ansOpt_r2.correctAnswer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingAnsOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.creatingAnsOpt);
} }
class AnswerOptionMainViewComponent {
    constructor() {
        this.creatingAnsOpt = true;
        this.ansOpt = new src_app_dto_AnswerOptionDto__WEBPACK_IMPORTED_MODULE_2__["AnswerOptionDto"];
        this.ansOptForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.maxWeight = 0;
        this.manageAnsOpts = new src_app_tools_manageAnsOpts__WEBPACK_IMPORTED_MODULE_3__["ManageAnsOpts"];
        this.creatingAnsOptChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ansOptChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ansOptFormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.maxWeightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manageAnsOptsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    addMaxWeight(ansOpt) {
        this.maxWeight += ansOpt.weight;
        this.maxWeight = Number(this.maxWeight.toPrecision(2));
        this.maxWeightChange.emit(this.maxWeight);
    }
    putAnsOptInfoIntoAnsOptForm(ansOpt) {
        this.ansOptForm.setValue({
            weight: ansOpt.weight,
            correctAnswer: ansOpt.correctAnswer,
            description: ansOpt.description
        });
        this.ansOptFormChange.emit(this.ansOptForm);
    }
    updateAnsOpt(ansOpt) {
        this.creatingAnsOpt = false;
        this.creatingAnsOptChange.emit(this.creatingAnsOpt);
        this.ansOpt = ansOpt;
        this.ansOptChange.emit(this.ansOpt);
        this.addMaxWeight(ansOpt);
        this.putAnsOptInfoIntoAnsOptForm(ansOpt);
    }
    delAnsOpt(ansOpt) {
        this.manageAnsOpts.ansOpts.splice(this.manageAnsOpts.ansOpts.indexOf(ansOpt), 1);
        this.manageAnsOpts.addItemIntoDelAnsOpts(ansOpt);
        this.manageAnsOptsChange.emit(this.manageAnsOpts);
        this.addMaxWeight(ansOpt);
    }
}
AnswerOptionMainViewComponent.ɵfac = function AnswerOptionMainViewComponent_Factory(t) { return new (t || AnswerOptionMainViewComponent)(); };
AnswerOptionMainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswerOptionMainViewComponent, selectors: [["app-answer-option-main-view"]], inputs: { creatingAnsOpt: "creatingAnsOpt", ansOpt: "ansOpt", ansOptForm: "ansOptForm", maxWeight: "maxWeight", manageAnsOpts: "manageAnsOpts" }, outputs: { creatingAnsOptChange: "creatingAnsOptChange", ansOptChange: "ansOptChange", ansOptFormChange: "ansOptFormChange", maxWeightChange: "maxWeightChange", manageAnsOptsChange: "manageAnsOptsChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 4, vars: 3, consts: [["sortMode", "multiple", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-text", 3, "disabled", "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-text", 3, "disabled", "click"]], template: function AnswerOptionMainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnswerOptionMainViewComponent_ng_template_2_Template, 9, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnswerOptionMainViewComponent_ng_template_3_Template, 12, 9, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.manageAnsOpts.ansOpts)("paginator", true)("rows", 10);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"], primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], pipes: [_pipes_weight_pipe__WEBPACK_IMPORTED_MODULE_8__["WeightPipe"], _pipes_correctAns__WEBPACK_IMPORTED_MODULE_9__["correctAnswerPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbnN3ZXItb3B0aW9uLW1haW4tdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerOptionMainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer-option-main-view',
                templateUrl: './answer-option-main-view.component.html',
                styleUrls: ['./answer-option-main-view.component.css'],
                providers: []
            }]
    }], function () { return []; }, { creatingAnsOpt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], creatingAnsOptChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ansOpt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ansOptChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ansOptForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ansOptFormChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], maxWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWeightChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], manageAnsOpts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], manageAnsOptsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "yAdQ":
/*!***************************************!*\
  !*** ./src/app/dto/ExamStudentDto.ts ***!
  \***************************************/
/*! exports provided: ExamStudentDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStudentDto", function() { return ExamStudentDto; });
/* harmony import */ var _ExamDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamDto */ "qk8R");
/* harmony import */ var _StudentDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentDto */ "5NrR");


class ExamStudentDto {
    constructor() {
        this.id = 0;
        this.definitiveGrade = 0.1;
        this.student = new _StudentDto__WEBPACK_IMPORTED_MODULE_1__["StudentDto"]();
        this.exam = new _ExamDto__WEBPACK_IMPORTED_MODULE_0__["ExamDto"];
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZNt":
/*!******************************************!*\
  !*** ./src/app/services/exam.service.ts ***!
  \******************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ExamService {
    constructor(http) {
        this.http = http;
    }
    getExams() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam/all');
    }
    getExamByProfessor(professorID) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam/byprofessor?id=' + professorID.toString();
        console.log(url);
        return this.http.get(url);
    }
    getExamByLink(link) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam/bylink?id=' + link);
    }
    saveExam(exam) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam', exam);
    }
    updateExam(exam) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam', exam);
    }
    delExam(exam) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'exam/' + exam.id, { responseType: 'text' });
    }
}
ExamService.ɵfac = function ExamService_Factory(t) { return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map