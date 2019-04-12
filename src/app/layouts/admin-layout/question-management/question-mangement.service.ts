import { PostHeaders, PutHeaders, DeleteHeaders } from './../../../Config/config';
import { Question, QuestionVM } from './../../../Models/Questions';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Url } from 'src/app/Config/config';
import { AnswerVM } from 'src/app/Models/Answers';

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

  postQuestion(ques:QuestionVM) : Observable<Question> {

    // Local data
    let q = new Question();
    q.CategoryId = ques.CategoryId;
    q.Id = ques.QuestionId;
    q.IsHTML =ques.IsHTML;
    q.QuestionText = ques.QuestionText;
    q.QuestionTypeId= ques.QuestionTypeId;

    QSsVM.push(ques);
    QSs.push(q);


    return of(q);

    // API data 
    // return this.http.post<Question>(`${Url}api/Questions/`,ques,{ headers: PostHeaders }); 

  };

  getQuesDetails(Id:number): Observable<QuestionVM> {

 
    // Local data
    return of(QSsVM.find(ele => ele.QuestionId==Id));
    
    // API data 
    // return this.http.get<QuestionVM>(`${Url}api/Questions/${Id}`);
  }


  putQues(ques:Question){

    let ix = QSs.findIndex(ele=>ele.Id==ques.Id);
    ix > -1 ? QSs[ix] = ques : null; 
    
    let ix1 = QSsVM.findIndex(ele=>ele.QuestionId==ques.Id);
    QSsVM[ix1].QuestionText= ques.QuestionText;
    QSsVM[ix1].CategoryId= ques.CategoryId;
    QSsVM[ix1].IsHTML= ques.IsHTML;
    QSsVM[ix1].QuestionTypeId= ques.QuestionTypeId;



    return of(QSsVM[ix1]);

    // API data
    // return this.http.put<QuestionVM>(
    //   `${Url}api/Questions/${ques.Id}`,
    //   ques,
    //   { headers: PutHeaders});
  }

  putAnswer(an:AnswerVM):Observable<AnswerVM>{
    
    let ix = QSs.findIndex(ele => ele.Id == an.QuestionId);
    QSsVM[ix].Answers.push(an);
   
    return of(an);

    // return this.http.put<AnswerVM>(`${Url}api/Answers/${an.Id}`,
    // an,
    // { headers: PutHeaders }
    // );    
  }

  deleteQues(ques:QuestionVM):Observable<Question>{
    let ix = QSsVM.findIndex(ele => ele.QuestionId == ques.QuestionId);
    let ix1 = QSs.findIndex(ele => ele.Id == ques.QuestionId);
    QSsVM.splice(ix,1);
    QSs.splice(ix1,1);

    return of(QSs[ix1]);
    // return this.http.delete<Question>(`${Url}api/Answers/${ques.QuestionId}`,
    // { headers: DeleteHeaders }
    // );   

  }

}


const QSs:Question[] = [
  {Id:1,CategoryId:1,QuestionText:"test_1",QuestionTypeId:1},
  {Id:2,CategoryId:2,QuestionText:"test_2",QuestionTypeId:1},
  {Id:3,CategoryId:2,QuestionText:"test_3",QuestionTypeId:1},
  {Id:4,CategoryId:3,QuestionText:"test_4",QuestionTypeId:1},
  {Id:5,CategoryId:3,QuestionText:"test_5",QuestionTypeId:1},
]

 

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