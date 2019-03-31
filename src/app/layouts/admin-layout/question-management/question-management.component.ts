import { Observable } from 'rxjs';
import { Question, QuestionVM } from './../../../Models/Questions';
import { QuestionMangementService } from './question-mangement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.scss']
})
export class QuestionManagementComponent implements OnInit {

  constructor(private srv:QuestionMangementService) { }

  Questions: Observable<Question[]>;
  // QuesDetails:Observable<QuestionVM>;
  editableId:number=null;

  getAllQusetions(){
    this.Questions = this.srv.getAllQuestions();
    this.Questions.subscribe(res=>{
      
      console.log(res);
    })
  }



  ngOnInit() {

    this.getAllQusetions();
    // this.Questions.subscribe(res=>{
    //   console.log(res);
    // })

  }

}
