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
    return this.http.get<QuestionVM>(`${Url}api/Questions/${Id}`);
  }

}


const QSs:Question[] = [
  {intId:1,intCategoryId:1,QuestionText:"test_1"},
  {intId:2,intCategoryId:2,QuestionText:"test_2"},
  {intId:3,intCategoryId:2,QuestionText:"test_3"},
  {intId:4,intCategoryId:3,QuestionText:"test_4"},
  {intId:5,intCategoryId:3,QuestionText:"test_5"},
]