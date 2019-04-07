// import { Question } from './../../../../Models/Questions';
import { QuestionMangementService } from './../question-mangement.service';
import { Component, OnInit, Input, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionVM, Question } from 'src/app/Models/Questions';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { CategoryManagementService } from '../../category-management/category-management.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnChanges {


  @Input() ques: Question;
  @Input() quesChange: EventEmitter<Question> = new EventEmitter<Question>();

  QuesDetailsObs: Observable<QuestionVM>;
  QuesDetails: QuestionVM = new QuestionVM();
  QuesDetailsCopy: QuestionVM=new QuestionVM();
  editable:Boolean=false;

  Categories: Category[] = [];
  CategoriesV: Category[] = [];


  constructor(private srv: QuestionMangementService, private srv1: CategoryManagementService,
    private router:Router,
    private route:ActivatedRoute) { }


  changeSelectedAnswer(Id:number){
    this.QuesDetailsCopy.Answers.forEach(ele => ele.Mark = 0);
    this.QuesDetailsCopy.Answers.find(ele => ele.Id == Id).Mark = 1;

    console.log(this.QuesDetailsCopy.Answers)
  }


  selectCategName(Id: number) {

    if (Id) {
      this.QuesDetailsCopy.CategoryName = this.CategoriesV.find(ele => ele.Id == Id).Name;
    }
  }

  update(){
    Object.assign(this.QuesDetailsCopy,this.QuesDetails)
    this.editable = true
  }

  getDetails(Id: number | string) {
    this.QuesDetailsObs = this.srv.getQuesDetails(+Id);
    this.QuesDetailsObs.subscribe(res => {
      debugger
      this.QuesDetails= res;
    })
  }


  Save(){
    this.QuesDetails = this.QuesDetailsCopy;

    let q= new Question();
    q.Id = this.QuesDetails.QuestionId;
    q.CategoryId = this.QuesDetails.CategoryId;
    q.IsHTML = this.QuesDetails.IsHTML;
    q.QuestionText = this.QuesDetails.QuestionText;
    q.QuestionTypeId=this.QuesDetails.QuestionTypeId = 1 ;

    q["Category"] =  this.CategoriesV.find(ele=>ele.Id==this.QuesDetails.CategoryId);


    this.srv.putQues(q).subscribe(res=>{
      
      this.quesChange.emit(q);


      this.QuesDetails.Answers.forEach(ele => {
        this.srv.putAnswer(ele).subscribe(a_res=>{
          console.log(`Answer ${ele.Id} has been updated .`);
        })
      })
    })
  }

  Cancel(){

  }




  ngOnChanges(){
    this.srv1.getAllCategories().subscribe(res => {
      this.CategoriesV = this.Categories = res;
    });
    this.editable = false;
    this.getDetails(+this.ques.Id);
  }

}
