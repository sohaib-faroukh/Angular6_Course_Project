import { Component, OnInit } from "@angular/core";
import { CategoryManagementService } from "./category-management.service";
import { Category } from "src/app/Models/Category";
import { Observable } from "rxjs";
import { QuestionMangementService } from "../question-management/question-mangement.service";
import { Question } from "src/app/Models/Questions";
import { map } from "rxjs/operators";

@Component({
  selector: "app-category-management",
  templateUrl: "./category-management.component.html",
  styleUrls: ["./category-management.component.scss"]
})
export class CategoryManagementComponent implements OnInit {
  constructor(
    private srv: CategoryManagementService,
    private srvQues: QuestionMangementService
  ) {}

  showEditCopm: boolean = false;

  Categories: Observable<Category[]>;

  selectedCateg: Category = new Category();

  Questions: Question[] = [];

  showAddCategCompo: boolean = false;

  // QuesDetails:Observable<QuestionVM>;
  editableId: number = null;

  selectCateg(item: Category) {
    this.showEditCopm = true;
    this.selectedCateg = item;
  }

  getAllCategories() {
    this.Categories = this.srv.getAllCategories();
    this.Categories.subscribe(res => {
      console.log(res);
    });
  }

  put(event) {
    alert("Edited " + JSON.stringify(event));
    if (event) {
      this.showEditCopm = false;
      this.Categories = this.srv.getAllCategories();
    }
  }

  onAddClick() {
    this.showAddCategCompo = !this.showAddCategCompo;
  }

  pushNewCateg(event) {
    if (event) {
      this.showAddCategCompo = !this.showAddCategCompo;
      this.Categories = this.srv.getAllCategories();
    }
  }

  DeleteCate(Categ:Category) {
    if (confirm("Are you sure to delete " + name)) {
      console.log("Implement delete functionality here");
      this.srv.deleteCat(Categ).subscribe(
        res => {
          this.Categories = this.srv.getAllCategories();
        },
        err => {
          alert("faild in connection  " + err.statusText);
        }
      );
    }
  }

  ngOnInit() {
    this.getAllCategories();
    // this.Questions.subscribe(res=>{
    //   console.log(res);
    // })
  }
}
