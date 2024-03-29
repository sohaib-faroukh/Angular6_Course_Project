import { QuestionMangementService } from "./../../question-management/question-mangement.service";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Question } from "src/app/Models/Questions";
import { Exam } from "src/app/Models/Exam";
import { CheckedPipePipe } from "src/app/checked-pipe.pipe";
import { DatePipe } from "@angular/common";
import * as $ from "jquery";
import { ExamService } from "../exam.service";
import { CategoryManagementService } from "../../category-management/category-management.service";
import { Category } from "src/app/Models/Category";
import { Observable } from "rxjs";

// declare $;

@Component({
  selector: "app-add-exam",
  templateUrl: "./add-exam.component.html",
  styleUrls: ["./add-exam.component.scss"]
})
export class AddExamComponent implements OnInit {

  categs: Category[] = [];

  newExam: Exam = new Exam();

  @Output() addedExam = new EventEmitter<Exam>();

  constructor(
    private srv2: CategoryManagementService,
    private srv1: ExamService,
    private srv: QuestionMangementService,
    private p: CheckedPipePipe,
    private datePipe: DatePipe
  ) { }

  reset() {
    if (confirm("are you sure ?")) {
      this.newExam = new Exam();
      this.categs.forEach(ele => {
        ele["Checked"] = false;
      });
      $("#examForm")[0].reset();
    }
    // else{

    // }
  }
  saveExam() {
    let exam: Exam = new Exam();
    Object.assign(exam, this.newExam);

    exam.Categories = this.p.transform(this.categs, "Checked", "true");

    console.log("exam :");
    console.log(exam);

    if (exam.Categories.length == 0) {
      alert("Select one category at least ...");
    } else {
      debugger
      this.srv1.postExam(exam).subscribe(
        res => {
          this.addedExam.emit(res);
        },
        err => {
          alert("connection failed ... " + err.statusText);
        }
      );
    }
  }

  changeQStatus(item_: Question) {
    if (item_) {
      let f = this.categs.find(ele => ele.Id == item_.Id);
      f["Checked"] = !f["Checked"];
    }

    console.log(this.categs);
  }

  ngOnInit() {

    let d: Observable<Category[]>;
    d = this.srv2.getAllCategories();

    d.subscribe(res => {
      this.categs = res;
      this.categs.forEach(ele => {
        ele["Checked"] = false;
      })

    })

  }
}
