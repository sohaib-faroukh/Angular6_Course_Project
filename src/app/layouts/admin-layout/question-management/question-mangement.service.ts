import { Question, QuestionVM } from './../../../Models/Questions';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from 'src/app/Config/config';

@Injectable({
  providedIn: 'root'
})
export class QuestionMangementService {

  constructor(private http:HttpClient) { }

  getAllQuestions():Observable<Question[]>{
    return this.http.get<Question[]>(Url+"api/Questions");
  }

  getQuesDetails(Id:number): Observable<QuestionVM> {
    return this.http.get<QuestionVM>(`${Url}api/Questions/${Id}`);
  }

}
