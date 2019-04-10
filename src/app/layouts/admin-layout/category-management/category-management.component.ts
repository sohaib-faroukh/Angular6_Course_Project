
import { Component, OnInit } from '@angular/core';
import { CategoryManagementService } from './category-management.service';
import { Category } from 'src/app/Models/Category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {


  constructor(private srv: CategoryManagementService) { }

  Categories: Observable<Category[]>;

  selectedQues: Category = new Category();


  showAddCategCompo: boolean = false;

  // QuesDetails:Observable<QuestionVM>;
  editableId: number = null;

  selectQues(item: Category) {
    
    this.selectedQues = item;
  }

  getAllCategories() {
    this.Categories = this.srv.getAllCategories();
    this.Categories.subscribe(res => {

      console.log(res);
    })
  }

  saveChanges(event) {
  }

  postNewCateg() {
    this.showAddCategCompo = !this.showAddCategCompo;
  }


  pushNewCateg(event) {
    if (event) {
      this.Categories.subscribe(res => {
        res.push(event);
      })
    }
  }

  ngOnInit() {

    this.getAllCategories();
    // this.Questions.subscribe(res=>{
    //   console.log(res);
    // })

  }


}
