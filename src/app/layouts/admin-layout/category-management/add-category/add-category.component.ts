import { Question } from 'src/app/Models/Questions';

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {


  newCategory:Category = new Category();
  constructor() { }



  selectQuestion(q:Question){
    
  }

  ngOnInit() {
  }

}
