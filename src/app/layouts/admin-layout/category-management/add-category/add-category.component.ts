import { Question } from "src/app/Models/Questions";

import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Category } from "src/app/Models/Category";
import { CategoryManagementService } from "../category-management.service";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnInit {
  newCategory: Category = new Category();
  newCategoryCopy: Category = new Category();

  @Output() newCateg = new EventEmitter<Category>();

  constructor(private srv: CategoryManagementService) {}

  Cancel() {
    if (confirm("are you sure ? ")) {
      this.newCategory = new Category();
    }
  }

  save() {
    this.srv.postCat(this.newCategory).subscribe(res => {
      this.newCateg.emit(res);
      this.newCategory = new Category();

    });
  }

  ngOnInit() {}
}
