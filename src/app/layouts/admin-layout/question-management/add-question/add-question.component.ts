import { CategoryManagementService } from "./../../category-management/category-management.service";
import { Category } from "src/app/Models/Category";
import { QuestionMangementService } from "./../question-mangement.service";
import { QuestionVM } from "src/app/Models/Questions";
import { Question } from "./../../../../Models/Questions";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AnswerVM } from "src/app/Models/Answers";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.scss"]
})
export class AddQuestionComponent implements OnInit {
  @Input() questions: Question[];
  @Output() questionsChange = new EventEmitter<Question>();
  newQuestion: QuestionVM = new QuestionVM();

  errorList: string[] = [];

  Categories: Category[] = [];
  CategoriesV: Category[] = [];

  postNewQues() {
    let a: number = 0;
    this.newQuestion.Answers.forEach(ele => {
      if (ele.Mark == 1) {
        a++;
      }
    });

    if (a == 0) {
      alert("please select one answer at least ...");
    } else if (a == 2) {
      alert("please select just one answer ...");
    } else if (a == 1) {
      this.newQuestion.QuestionTypeId = 1;

      this.srv.postQuestion(this.newQuestion).subscribe(res => {
        let qVm = new QuestionVM();
        let q = new Question();
        q.Id = qVm.QuestionId;
        q.CategoryId = qVm.CategoryId;
        q.IsHTML = qVm.IsHTML;
        q.QuestionText = qVm.QuestionText;
        q.QuestionTypeId = qVm.QuestionTypeId;

        this.questionsChange.emit(q);
        this.initQues();
      });
    }
  }

  selectCategName(Id: number) {
    if (Id) {
      this.newQuestion.CategoryName = this.CategoriesV.find(
        ele => ele.Id == Id
      ).Name;
    }
  }

  changeSelectedAnswer(index: number) {
    this.newQuestion.Answers.forEach(ele => (ele.Mark = 0));
    this.newQuestion.Answers[index].Mark = 1;

    console.log(this.newQuestion.Answers);
  }

  constructor(
    private srv: QuestionMangementService,
    private srv1: CategoryManagementService
  ) {}

  initQues() {
    this.newQuestion = new QuestionVM();
    this.newQuestion.Answers = new Array<AnswerVM>();

    for (let i = 0; i < 4; i++) {
      this.newQuestion.Answers.push(new AnswerVM());
    }
    this.newQuestion.QuestionTypeId = 1;
  }

  ngOnInit() {
    this.srv1.getAllCategories().subscribe(res => {
      this.CategoriesV = this.Categories = res;
    });

    this.initQues();
  }
}
