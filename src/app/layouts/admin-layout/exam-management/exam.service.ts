import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exam } from 'src/app/Models/Exam';
import { HttpClient } from '@angular/common/http';
import { Url, PostHeaders, PutHeaders, DeleteHeaders } from 'src/app/Config/config';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


  constructor(private http: HttpClient) { }


  getAllExams(): Observable<Exam[]> {

    // local test data
    // return of(data);

    //API data
    return this.http.get<Exam[]>(Url + "api/Exams");



  }

  postExam(e: Exam): Observable<Exam> {

    // local data
    e.Id = data.length + 1;
    data.push(e);
    // return of(data.find(ele => ele.Id == e.Id));

    // API data
    return this.http.post<Exam>(Url + "api/Exams",e,{headers:PostHeaders});
  }

  putExam(e: Exam): Observable<Exam> {
    data[data.findIndex(el => el.Id == e.Id)] = e;
    // return of(data.find(ele => ele.Id == e.Id));

    // API data
    return this.http.put<Exam>(Url + "api/Exams/"+e.Id,e,{headers:PutHeaders});

  }

  deleteExam(e: Exam): Observable<Exam> {


    data.splice(data.findIndex(el => el.Id == e.Id), 1);
    // return of(e);

    // API data
    return this.http.delete<Exam>(Url + "api/Exams/"+e.Id,{headers:DeleteHeaders});
  }

}



const data: Exam[] = [
  {
    Id: 1, Name: "exam-test1", ExamDate: new Date(2019, 3, 20), Description: "ex-tst-desc1", UserId: 1, FirstName: "Sohaib", LastName: "Faroukh", Categories: [
      { Id: 1, Name: "categ1", ImageUrl: "tst 1-1" },
      { Id: 2, Name: "categ2", ImageUrl: "tst 1-2" },
    ]
  },
  {
    Id: 2, Name: "exam-test2", ExamDate: new Date(2019, 3, 21), Description: "ex-tst-desc2", UserId: 1, FirstName: "Sohaib", LastName: "Faroukh", Categories: [
      { Id: 1, Name: "categ1", ImageUrl: "tst 2-1" },
      { Id: 2, Name: "categ2", ImageUrl: "tst 2-2" },
      { Id: 3, Name: "categ3", ImageUrl: "tst 2-3" },
    ]
  }
]
