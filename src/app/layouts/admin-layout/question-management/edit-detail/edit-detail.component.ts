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
  QuesDetails: QuestionVM=new QuestionVM();


  constructor(private srv:QuestionMangementService,
    private router:Router,
    private route:ActivatedRoute) { }


  getDetails(Id: number | string) {
    this.QuesDetailsObs = this.srv.getQuesDetails(+Id);
    this.QuesDetailsObs.subscribe(res => {
      this.QuesDetails= res;

      let c = document.getElementById('openModel');
      if (c) {
        c.click();
      }

    })
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      let Id:number = + res["Id"];
      console.log("cateched : "+Id);
      this.getDetails(Id);
     
    })
  }

}
