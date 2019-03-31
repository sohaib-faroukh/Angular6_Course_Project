import { QuestionMangementService } from './../question-mangement.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionVM } from 'src/app/Models/Questions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss']
})
export class EditDetailComponent implements OnInit {

  QuesDetailsObs: Observable<QuestionVM>;
  QuesDetails: QuestionVM = new QuestionVM();
  QuesDetailsCopy: QuestionVM=new QuestionVM();
  editable:Boolean=false;

  constructor(private srv:QuestionMangementService,
    private router:Router,
    private route:ActivatedRoute) { }


  changeSelectedAnswer(Id:number){
    this.QuesDetailsCopy.Answers.forEach(ele => ele.Mark = 0);
    this.QuesDetailsCopy.Answers.find(ele => ele.Id == Id).Mark = 1;

    console.log(this.QuesDetailsCopy.Answers)
  }

  update(){
    Object.assign(this.QuesDetailsCopy,this.QuesDetails)
    this.editable = true
  }

  getDetails(Id: number | string) {
    this.QuesDetailsObs = this.srv.getQuesDetails(+Id);
    this.QuesDetailsObs.subscribe(res => {
      this.QuesDetails= res;

      debugger

    

    })
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      let Id:number = + res["Id"];
      this.getDetails(Id);
     
    })
  }

}
