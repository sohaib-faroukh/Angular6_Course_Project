import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Category } from 'src/app/Models/Category';
import { Exam } from 'src/app/Models/Exam';
import { Observable } from 'rxjs';
import { Question, QuestionVM } from 'src/app/Models/Questions';
import { ActivatedCategory } from 'src/app/Models/ActivatedCategory';
import { AnswerVM } from 'src/app/Models/Answers';
import { UserCategoryAnswers } from 'src/app/Models/UserCategoryAnswers';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { QuestionAnswer } from 'src/app/Models/UserAnswerQuestion';
import { UserAnswer } from 'src/app/Models/UserAnswer';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  currentCategory:number;
  activatedCategories: ActivatedCategory[]=[];
  constructor(private srv: ExamService) { }
  QuestionAnswers: UserAnswer[];
  answer1: AnswerVM;
  answer: QuestionVM = new QuestionVM();
  isSave: boolean = false;
  isGetQuestion: boolean = false;
  categories: Category[] = [];

  examAct: Exam;
  exam: Observable<Exam>;
  ques: QuestionVM[] = [];
  tempQuestionNumber: number = 0;
  userQuestionAnswer: QuestionAnswer = new QuestionAnswer();
  userQuestionAnswers: QuestionAnswer[] = [];
  userCategoryAnswer:UserCategoryAnswers=new UserCategoryAnswers();

  getCurrentExam() {
    this.srv.getCurrentExam().subscribe(res => {
      this.categories = res.Categories;
      this.examAct = res;
    })
  }

  choicedCategoryId:number = null;
  getQuestions(item: Category) {

    
    if(this.choicedCategoryId != null && this.choicedCategoryId!==item.Id){
      if(confirm("do you sure you want to move to another category ? ")){

        this.srv.getQuestionsByCat(this.examAct.Id, item.Id).subscribe(
          res => {
            this.choicedCategoryId = item.Id;
          for(let i=0;i<this.categories.length;i++)
          {
            if(this.activatedCategories[i].IdCategory==this.categories[i].Id)
           this.activatedCategories[i].isActivate=true;
          }
          this.ques = res;
            this.isGetQuestion = true;
          })

      }
      else{
        alert("still in the same category")
      }
    }

    else{
      this.srv.getQuestionsByCat(this.examAct.Id, item.Id).subscribe(
        res => {
          this.choicedCategoryId = item.Id;
        for(let i=0;i<this.categories.length;i++)
        {
          if(this.activatedCategories[i].IdCategory==this.categories[i].Id)
         this.activatedCategories[i].isActivate=true;
        }
        this.ques = res;
          this.isGetQuestion = true;
        })
    }

   

  }
  Previous(idQuestion) {
    if (this.tempQuestionNumber == 0) {

    }
    else {
      this.isSave = false;
      this.tempQuestionNumber--;
    }
  }

  Next(idQuestion) {
    
    if (this.tempQuestionNumber >= this.ques.length) {

    }
    else
      if (this.tempQuestionNumber == this.ques.length - 1) {

        this.userQuestionAnswer.QuestionId = idQuestion;
        this.userQuestionAnswer.SelectedAnswerId = this.answer1.Id;
        this.userQuestionAnswer.Mark = this.answer1.Mark;
        
        this.userQuestionAnswers.push(this.userQuestionAnswer);

        this.userQuestionAnswer=new QuestionAnswer();
        if(this.answer1==null)
        {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
        }
        else
        {
        this.userQuestionAnswer=new QuestionAnswer();
        this.isSave = true;
        }
      }
      else {
        if(this.answer1==null)
        {
            {
              Swal.fire(
                'warning!',
                'you are not able to move.',
                'success'
              )
            }
        }
        else
        {
        this.userQuestionAnswer.QuestionId = idQuestion;
        this.userQuestionAnswer.SelectedAnswerId = this.answer1.Id;
        this.userQuestionAnswer.Mark = this.answer1.Mark;

        this.userQuestionAnswers.push(this.userQuestionAnswer);
        this.userQuestionAnswer=new QuestionAnswer();

        this.tempQuestionNumber++;
        }
      }
  }

  Save() { }
  //  activatedCategories[item.Id]
  isactivated: boolean=false;
  cat: ActivatedCategory = new ActivatedCategory();
  ngOnInit() {
    this.getCurrentExam();
    for (let category of this.categories) {
      this.cat.IdCategory = category.Id;
      this.cat.isActivate = false;

      this.activatedCategories.push(this.cat);
      this.cat = new ActivatedCategory();

    }
  }

  SendUserAnswer() {
    this.userCategoryAnswer.ExamId=this.examAct.Id;
    this.userCategoryAnswer.UserId=this.examAct.UserId;
    this.userCategoryAnswer.Answers=this.userQuestionAnswers;

    this.srv.sendUserAnswer(this.userCategoryAnswer).subscribe(res =>
      {
        Swal.fire(
          '',
          'Done',
          'success'
        )
        this.isSave=false;
      }
      
    )
  }

}
