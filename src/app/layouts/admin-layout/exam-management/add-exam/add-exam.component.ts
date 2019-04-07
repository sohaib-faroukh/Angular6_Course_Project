import { QuestionMangementService } from './../../question-management/question-mangement.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/Questions';
import { Exam } from 'src/app/Models/Exam';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {

  Questions: Question[] = [];
  QuestionsCopy:Question[]=[];

   newExam:Exam = new Exam();
  



  constructor(private srv:QuestionMangementService) { }


  saveExam(){

  }


  changeQStatus(item_:Question){
    if(item_){


    let f = this.QuestionsCopy.find(ele => ele.Id == item_.Id);
    f["Checked"] = !f["Checked"] ;
    }

    console.log(this.QuestionsCopy);

  }


  ngOnInit() {
    this.srv.getAllQuestions().subscribe(res=>{
      this.Questions = res;
      this.QuestionsCopy = res;

      this.QuestionsCopy.forEach(ele=>{
        ele["Checked"]=false;
      })
    })
  }

}
