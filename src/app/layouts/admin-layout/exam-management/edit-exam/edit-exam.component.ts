import { Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';
import { Question } from 'src/app/Models/Questions';
import { Exam } from 'src/app/Models/Exam';
import { ExamService } from "../exam.service";
import { QuestionMangementService } from '../../question-management/question-mangement.service';
import { CheckedPipePipe } from 'src/app/checked-pipe.pipe';
import { DatePipe } from '@angular/common';
import * as $ from "jquery";
import { Category } from 'src/app/Models/Category';
import { Observable } from 'rxjs';
import { CategoryManagementService } from '../../category-management/category-management.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.scss']
})
export class EditExamComponent implements OnChanges {

  categs: Category[] = [];

  @Input() _newExam: Exam = new Exam();

  newExam: Exam = new Exam();

  @Output() updatedExam = new EventEmitter<Exam>();

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


  changeInputDate(event){
    this.newExam.ExamDate = event;
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
      this.srv1.putExam(exam).subscribe(
        res => {
          this.updatedExam.emit(res);
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

  ngOnChanges() {

    Object.assign(this.newExam, this._newExam);

    let d: Observable<Category[]>;
    d = this.srv2.getAllCategories();

    d.subscribe(res => {
      this.categs = res;
      this.categs.forEach(ele => {
        if (this.newExam.Categories.length > 0) {
          if (this.newExam.Categories.find(r => r.Id == ele.Id)) {
            ele["Checked"] = true;

          } else {
            ele["Checked"] = false;

          }
        } else {
          ele["Checked"] = false;
        }
      })

    })

  }
}
