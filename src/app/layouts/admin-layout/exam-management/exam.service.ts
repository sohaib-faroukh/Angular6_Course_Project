import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exam } from 'src/app/Models/Exam';
import { HttpClient } from '@angular/common/http';
import { Url } from 'src/app/Config/config';

@Injectable({
  providedIn: 'root'
})
export class ExamService {


  constructor(private http: HttpClient) { }


  getAllExams(): Observable<Exam[]> {

    //API data
    // return this.http.get<Exam[]>(Url + "api/Exams");

    // local test data 
    return of(data);

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