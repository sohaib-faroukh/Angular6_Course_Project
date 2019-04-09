import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exam } from 'src/app/Models/Exam';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/Config/config';
import { Question, QuestionVM } from 'src/app/Models/Questions';
import { UserAnswer } from 'src/app/Models/UserAnswer';
import { QuestionAnswer } from 'src/app/Models/UserAnswerQuestion';
import { UserCategoryAnswers } from 'src/app/Models/UserCategoryAnswers';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


  constructor(private http: HttpClient) { }

  getCurrentExam(): Observable<Exam> {
    return of(data)
    // return this.http.get<Exam>(Url + "api/Exams/CurrentExam");
  }

  getQuestionsByCat(examId: number, catId: number): Observable<QuestionVM[]> {

    return of(QSsVM);
    // return this.http.get<QuestionVM[]>(Url + "api/Questions/" + examId + "/" + catId);
  }

  sendUserAnswer(questionAnswer: UserCategoryAnswers) {
    return this.http.post(Url + "api/UserAnswers/Save", questionAnswer);
  }
}



const data: Exam = {
  Id: 1, Name: "exam-test1", ExamDate: new Date(2019, 3, 20), Description: "ex-tst-desc1",
  UserId: 1, FirstName: "Sohaib", LastName: "Faroukh",
  Categories: [
    { Id: 1, Name: "categ1", ImageUrl: "tst 1-1" },
    { Id: 2, Name: "categ2", ImageUrl: "tst 1-2" },
  ]
}





const QSsVM:QuestionVM[] = [
  { QuestionId:1,CategoryId:1,QuestionText:"test_1",CategoryName:"IT",QuestionTypeId:1,Answers:
    [
      {Id:1,QuestionId:1, AnswerText:"test_1_answer_1" ,Mark:1},
      {Id:2,QuestionId:1, AnswerText:"test_1_answer_2" ,Mark:0},
      {Id:3,QuestionId:1, AnswerText:"test_1_answer_3" ,Mark:0}
    ]
  },
  { QuestionId:2,CategoryId:1,QuestionText:"test_2",CategoryName:"IT",QuestionTypeId:1,Answers:
    [
      {Id:4,QuestionId:1, AnswerText:"test_2_answer_1" ,Mark:0},
      {Id:5,QuestionId:1, AnswerText:"test_2_answer_2" ,Mark:1},
      {Id:6,QuestionId:1, AnswerText:"test_2_answer_3" ,Mark:0}
    ]
  },
  { QuestionId:3,CategoryId:1,QuestionText:"test_3",CategoryName:"IT",QuestionTypeId:1,Answers:
    [
      {Id:7,QuestionId:1, AnswerText:"test_3_answer_1" ,Mark:0},
      {Id:8,QuestionId:1, AnswerText:"test_3_answer_2" ,Mark:0},
      {Id:9,QuestionId:1, AnswerText:"test_3_answer_3" ,Mark:1}
    ]
  },
  
]