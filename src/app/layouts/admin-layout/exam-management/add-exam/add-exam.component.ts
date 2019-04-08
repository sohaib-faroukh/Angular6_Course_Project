import { QuestionMangementService } from './../../question-management/question-mangement.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Question } from 'src/app/Models/Questions';
import { Exam } from 'src/app/Models/Exam';
import { CheckedPipePipe } from 'src/app/checked-pipe.pipe';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';

// declare $;

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {

  Questions: Question[] = [];
  QuestionsCopy: Question[] = [];

  newExam: Exam = new Exam();


  @Output() addedExam = new EventEmitter<Exam>()



  constructor(private srv: QuestionMangementService, private p: CheckedPipePipe, private datePipe: DatePipe) { }


  reset() {

    if (confirm("are you sure ?")) {

      this.newExam = new Exam();
      this.QuestionsCopy.forEach(ele => {
        ele["Checked"] = false
      }
      )
      $("#examForm")[0].reset();

    }
    // else{

    // }
  }
  saveExam() {
    let exam: Exam = new Exam();
    Object.assign(exam, this.newExam);

    exam["Quastions"] = this.p.transform(this.QuestionsCopy, 'Checked', 'true');

    console.log("exam :");
    console.log(exam);


    this.addedExam.emit(exam)

  }


  changeQStatus(item_: Question) {
    if (item_) {
      let f = this.QuestionsCopy.find(ele => ele.Id == item_.Id);
      f["Checked"] = !f["Checked"];
    }

    console.log(this.QuestionsCopy);

  }


  ngOnInit() {
    this.srv.getAllQuestions().subscribe(res => {
      this.Questions = res;
      this.QuestionsCopy = res;

      this.QuestionsCopy.forEach(ele => {
        ele["Checked"] = false;
      })
    })
  }

}


