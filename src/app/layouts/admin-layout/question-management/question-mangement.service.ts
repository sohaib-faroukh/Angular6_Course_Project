import { Question, QuestionVM } from './../../../Models/Questions';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Url } from 'src/app/Config/config';

@Injectable({
  providedIn: 'root'
})
export class QuestionMangementService {

  constructor(private http:HttpClient) { }



  getAllQuestions():Observable<Question[]>{

    // Local data

    return of(QSs);

    // API data 
    // return this.http.get<Question[]>(Url+"api/Questions");
  }

  getQuesDetails(Id:number): Observable<QuestionVM> {

 
    // Local data
    return of(QSsVM.find(ele => ele.intQuestionId==Id));
    
    // API data 
    // return this.http.get<QuestionVM>(`${Url}api/Questions/${Id}`);
  }

}


const QSs:Question[] = [
  {intId:1,intCategoryId:1,QuestionText:"test_1"},
  {intId:2,intCategoryId:2,QuestionText:"test_2"},
  {intId:3,intCategoryId:2,QuestionText:"test_3"},
  {intId:4,intCategoryId:3,QuestionText:"test_4"},
  {intId:5,intCategoryId:3,QuestionText:"test_5"},
]



const QSsVM:QuestionVM[] = [
  { intQuestionId:1,intCategoryId:1,QuestionText:"test_1",CategoryName:"IT",Answers:
    [
      {intId:1,intQuestionId:1, AnswerText:"test_1_answer_1" ,intMark:1},
      {intId:2,intQuestionId:1, AnswerText:"test_1_answer_2" ,intMark:0},
      {intId:3,intQuestionId:1, AnswerText:"test_1_answer_3" ,intMark:0}
    ]
  },
  { intQuestionId:2,intCategoryId:1,QuestionText:"test_2",CategoryName:"IT",Answers:
    [
      {intId:4,intQuestionId:1, AnswerText:"test_2_answer_1" ,intMark:0},
      {intId:5,intQuestionId:1, AnswerText:"test_2_answer_2" ,intMark:1},
      {intId:6,intQuestionId:1, AnswerText:"test_2_answer_3" ,intMark:0}
    ]
  },
  { intQuestionId:3,intCategoryId:1,QuestionText:"test_3",CategoryName:"IT",Answers:
    [
      {intId:7,intQuestionId:1, AnswerText:"test_3_answer_1" ,intMark:0},
      {intId:8,intQuestionId:1, AnswerText:"test_3_answer_2" ,intMark:0},
      {intId:9,intQuestionId:1, AnswerText:"test_3_answer_3" ,intMark:1}
    ]
  },
  
]