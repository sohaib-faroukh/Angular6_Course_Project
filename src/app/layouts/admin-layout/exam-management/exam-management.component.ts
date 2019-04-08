import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/Models/Exam';
import { Observable } from 'rxjs';
import { ExamService } from './exam.service';

@Component({
  selector: 'app-exam-management',
  templateUrl: './exam-management.component.html',
  styleUrls: ['./exam-management.component.scss']
})
export class ExamManagementComponent implements OnInit {

  ExamsObs: Observable<Exam[]>;
  Exams: Exam[] = [];


  showAddExamCompo: boolean = false;
  constructor(private srv: ExamService) { }

  ngOnInit() {
    this.getAllExams();
  }


  getAllExams() {
    this.ExamsObs = this.srv.getAllExams();
    this.ExamsObs.subscribe(res => {
      this.Exams = res;
    })
  }

  postNewExamAction() {
    this.showAddExamCompo = !this.showAddExamCompo;
  }

  postNewExam(event) {
    console.log("exam father :");
    console.log(event);
  }
}
