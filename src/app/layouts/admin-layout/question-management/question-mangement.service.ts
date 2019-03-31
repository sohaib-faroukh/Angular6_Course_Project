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
    return of(QSsVM.find(ele => ele.QuestionId==Id));
    
    // API data 
    // return this.http.get<QuestionVM>(`${Url}api/Questions/${Id}`);
  }

}


const QSs:Question[] = [
  {Id:1,CategoryId:1,QuestionText:"test_1"},
  {Id:2,CategoryId:2,QuestionText:"test_2"},
  {Id:3,CategoryId:2,QuestionText:"test_3"},
  {Id:4,CategoryId:3,QuestionText:"test_4"},
  {Id:5,CategoryId:3,QuestionText:"test_5"},
]



const QSsVM:QuestionVM[] = [
  { QuestionId:1,CategoryId:1,QuestionText:"test_1",CategoryName:"IT",Answers:
    [
      {Id:1,QuestionId:1, AnswerText:"test_1_answer_1" ,Mark:1},
      {Id:2,QuestionId:1, AnswerText:"test_1_answer_2" ,Mark:0},
      {Id:3,QuestionId:1, AnswerText:"test_1_answer_3" ,Mark:0}
    ]
  },
  { QuestionId:2,CategoryId:1,QuestionText:"test_2",CategoryName:"IT",Answers:
    [
      {Id:4,QuestionId:1, AnswerText:"test_2_answer_1" ,Mark:0},
      {Id:5,QuestionId:1, AnswerText:"test_2_answer_2" ,Mark:1},
      {Id:6,QuestionId:1, AnswerText:"test_2_answer_3" ,Mark:0}
    ]
  },
  { QuestionId:3,CategoryId:1,QuestionText:"test_3",CategoryName:"IT",Answers:
    [
      {Id:7,QuestionId:1, AnswerText:"test_3_answer_1" ,Mark:0},
      {Id:8,QuestionId:1, AnswerText:"test_3_answer_2" ,Mark:0},
      {Id:9,QuestionId:1, AnswerText:"test_3_answer_3" ,Mark:1}
    ]
  },
  
]