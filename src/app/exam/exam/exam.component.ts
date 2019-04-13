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
import { Router } from '@angular/router';
import { CheckedPipePipe } from 'src/app/checked-pipe.pipe';
import { element } from '@angular/core/src/render3';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  currentCategory: number;
  activatedCategories: ActivatedCategory[] = [];
  quesCopy: QuestionVM[];
  currentQuestion: any;
  currentCateg: Category = new Category();
  constructor(private srv: ExamService, private router: Router) {
    this.currentCateg["Questions"] = new Array<Question>();

  }
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
  userCategoryAnswer: UserCategoryAnswers = new UserCategoryAnswers();


  public isCollapsed = true;


  getCurrentExam() {
    this.srv.getCurrentExam().subscribe(res => {
      this.categories = res.Categories;
      this.examAct = res;
    }, err => {
      alert("connection failed ..." + err.statusText);
    })
  }

  choicedCategoryId: number = null;
  getQuestions(item: Category) {

    if (this.choicedCategoryId != null && this.choicedCategoryId !== item.Id) {
      if (confirm("do you sure you want to move to another category ? ")) {

        this.srv.getQuestionsByCat(this.examAct.Id, item.Id).subscribe(
          res => {
            this.choicedCategoryId = item.Id;
            for (let i = 0; i < this.categories.length; i++) {
              if (this.activatedCategories[i].IdCategory == this.categories[i].Id)
                this.activatedCategories[i].isActivate = true;
            }
            this.ques = res;

            // Sohaib - code
            this.quesCopy = res;
            if (this.quesCopy && this.quesCopy.length > 0) {
              this.quesCopy.forEach(_v => {
                _v.Answers.forEach(_v_ => {
                  _v_["Checked"] = false;

                })


              })
            }

            this.currentQuestion = this.quesCopy[0];
            this.currentCateg["Questions"].push(this.currentQuestion);
            // end


            this.isGetQuestion = true;
          }, err => {
            alert("connection failed ..." + err.statusText);
          })

      }
      else {
        alert("you are still in the same category...")
      }
    }

    else {
      this.srv.getQuestionsByCat(this.examAct.Id, item.Id).subscribe(
        res => {
          this.choicedCategoryId = item.Id;
          for (let i = 0; i < this.categories.length; i++) {
            if (this.activatedCategories[i].IdCategory == this.categories[i].Id)
              this.activatedCategories[i].isActivate = true;
          }
          this.ques = res;

          // Sohaib - code
          this.quesCopy = res;
          if (this.quesCopy && this.quesCopy.length > 0) {
            this.quesCopy.forEach(_v => {
              _v.Answers.forEach(_v_ => {
                _v_["Checked"] = false;

              })
            })
          }

          this.currentQuestion = this.quesCopy[0];
          this.currentCateg["Questions"].push(this.currentQuestion);


          // end



          this.isGetQuestion = true;
        }, err => {
          alert("connection failed ..." + err.statusText);
        })
    }



  }

  // ******* sohaib - code **************************************************

  _prev(Id: number) {
    let index: number = this.quesCopy.findIndex(ele => ele.QuestionId == Id);

    if (this.quesCopy && this.quesCopy.length > 0) {
      if (index != 0) {
        index--;
        this.currentQuestion = this.quesCopy[index];
      }
      else {
        alert("this is the first question .");
      }
    }

    let ix = this.currentCateg['Questions'].findIndex(ele => ele.QuestionId == this.currentQuestion.QuestionId);
    if (ix == -1) {
      this.currentCateg['Questions'].push(this.currentQuestion);
    }
    else {
      this.currentCateg['Questions'][ix] = this.currentQuestion;
    }

  }

  _next(Id: number) {
    let index: number = this.quesCopy.findIndex(ele => ele.QuestionId == Id);
    if (this.quesCopy && this.quesCopy.length > 0) {
      if (index != this.quesCopy.length - 1) {
        let d = 0;
        this.quesCopy[index].Answers.forEach(r_ => {
          if (r_["Checked"] == true) {
            d += 1;
          }
        })

        if (d == 0) {
          alert("please select one answer  ...");
        }
        else if (d == 1) {
          index++;
          this.currentQuestion = this.quesCopy[index];
        }
        else {
          alert("please select just one answer ...")
        }

      }
      else {
        alert("this is the last question .");
      }
    }

    let ix = this.currentCateg['Questions'].findIndex(ele => ele.QuestionId == this.currentQuestion.QuestionId);
    if (ix == -1) {
      this.currentCateg['Questions'].push(this.currentQuestion);
    }
    else {
      this.currentCateg['Questions'][ix] = this.currentQuestion;
    }

  }



  SendUserAnswer() {

    let ix = this.currentCateg['Questions'].findIndex(ele => ele.QuestionId == this.currentQuestion.QuestionId);
    if (ix == -1) {
      this.currentCateg['Questions'].push(this.currentQuestion);
    }
    else {
      this.currentCateg['Questions'][ix] = this.currentQuestion;
    }

    // debugger

    this.userCategoryAnswer.ExamId = this.examAct.Id;
    this.userCategoryAnswer.UserId = this.examAct.UserId;
    this.userCategoryAnswer.Answers = this.userQuestionAnswers;


    let r = this.currentCateg['Questions'].sort((a, b) => a.QuestionId - b.QuestionId);
    let Answers: QuestionAnswer[] = [];
    this.currentCateg['Questions'].forEach(elt => {
      let c = elt['Answers'].find(rrr => rrr['Checked'] == true);
      let vb = new QuestionAnswer();
      vb.Mark = c.Mark;
      vb.QuestionId = elt.QuestionId;
      vb.SelectedAnswerId = c.Id;
      Answers.push(vb)
    });

    this.userCategoryAnswer.Answers = Answers;


    this.calucResultMatks(this.userCategoryAnswer);
    this.choicedCategoryId = null;

    this.srv.sendUserAnswer(this.userCategoryAnswer).subscribe(res => {
      Swal.fire(
        '',
        'Done',
        'success'
      )
      this.isSave = false;
    }, err => {
      alert("connection failed " + err.statusText);
    }

    )
  }


  calucResultMatks(ur_: UserCategoryAnswers) {
    let res = 0;

    ur_.Answers.forEach(it => {
      res += it.Mark;
    })

    alert("your result in this Category is " + res);
  }

  updateChechedAnswer(QuestionId: number, i: number, event) {
    this.quesCopy.find(ele => ele.QuestionId == QuestionId).Answers.forEach(ele => ele["Checked"] = false);

    this.quesCopy.find(ele => ele.QuestionId == QuestionId).Answers[i]["Checked"] = event;

    let ix = this.quesCopy.findIndex(ele => ele.QuestionId == QuestionId);
    if (ix == this.quesCopy.length - 1 && event == true) {
      this.isSave = true;
    } else {
      this.isSave = false;

    }

  }

  // ******* end of sohaib - code **************************************************




  Save() { }
  //  activatedCategories[item.Id]
  isactivated: boolean = false;
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



}
