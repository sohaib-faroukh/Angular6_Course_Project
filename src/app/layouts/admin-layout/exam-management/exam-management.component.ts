import { Component, OnInit } from "@angular/core";
import { Exam } from "src/app/Models/Exam";
import { Observable } from "rxjs";
import { ExamService } from "./exam.service";

@Component({
  selector: "app-exam-management",
  templateUrl: "./exam-management.component.html",
  styleUrls: ["./exam-management.component.scss"]
})
export class ExamManagementComponent implements OnInit {
  ExamsObs: Observable<Exam[]>;
  Exams: Exam[] = [];

  selectedExam: Exam = new Exam();

  showAddExamCompo: boolean = false;
  showEditCompo: boolean = false;

  constructor(private srv: ExamService) { }

  ngOnInit() {
    this.getAllExams();
  }

  getAllExams() {
    this.ExamsObs = this.srv.getAllExams();
    this.ExamsObs.subscribe(res => {
      this.Exams = res;
    });
  }

  postNewExamAction() {
    this.showAddExamCompo = !this.showAddExamCompo;
  }

  postNewExam(event) {
    if (event) {
      this.showAddExamCompo = false;
      this.ExamsObs = this.srv.getAllExams();
    }
  }

  putExam(event) {
    if (event) {
      debugger
      this.showEditCompo = false;
      this.ExamsObs = this.srv.getAllExams();
    }
  }

  deleteExam(item: Exam) {
    if (confirm("are you sure ? ")) {
      this.srv.deleteExam(item).subscribe(res => {
        if (res) {
          alert("you deleted the Exam with Id #" + res.Id);
        }
      }, err => {
        alert("connection failed " + err.statusText);
      })
    }

  }

  editExam(ex: Exam) {
    this.showEditCompo = true;
    this.selectedExam = ex;
  }

  saveUpdatedExam(event) {
    if (event) {
      this.ExamsObs = this.srv.getAllExams();
    }
  }
}
