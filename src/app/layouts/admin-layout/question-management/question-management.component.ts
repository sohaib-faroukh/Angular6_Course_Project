import { QuestionVM, Question } from "src/app/Models/Questions";
import { Observable } from "rxjs";
// import { Question, QuestionVM } from './../../../Models/Questions';
import { QuestionMangementService } from "./question-mangement.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question-management",
  templateUrl: "./question-management.component.html",
  styleUrls: ["./question-management.component.scss"]
})
export class QuestionManagementComponent implements OnInit {
  constructor(private srv: QuestionMangementService) { }

  Questions: Observable<Question[]>;
  Questions_: Question[] = [];

  selectedQues: Question = new Question();

  showAddQuesCompo: boolean = false;
  showEditQuesCompo: boolean = false;

  // QuesDetails:Observable<QuestionVM>;
  editableId: number = null;

  selectQues(item: Question) {

    this.selectedQues = item;
    this.showEditQuesCompo = true;
  }

  getAllQusetions() {
    this.Questions = this.srv.getAllQuestions();
    this.Questions.subscribe(res => {
      this.Questions_ = res;
      console.log(res);
    });
  }

  saveChanges(event) { }

  postNewQues() {
    this.showAddQuesCompo = !this.showAddQuesCompo;
  }

  deleteQues(id: number) {
    if (confirm("are you sure ? ")) {
      this.srv.deleteQues(id).subscribe(
        res => {
          if (res) {
            this.Questions = this.srv.getAllQuestions();
          }
        },
        err => {
          alert("connection failed ... " + err.statusText);
        }
      );
    }
  }

  pushNewQues(event) {
    if (event) {
      this.Questions = this.srv.getAllQuestions();
    }
  }

  ngOnInit() {
    this.getAllQusetions();
    // this.Questions.subscribe(res=>{
    //   console.log(res);
    // })
  }
}
