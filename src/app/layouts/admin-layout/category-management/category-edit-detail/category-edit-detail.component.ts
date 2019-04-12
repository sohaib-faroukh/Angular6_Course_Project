import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  OnChanges,
  Output
} from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/app/Models/Category";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { CategoryManagementService } from "src/app/layouts/admin-layout/category-management/category-management.service";

@Component({
  selector: "app-category-edit-detail",
  templateUrl: "./category-edit-detail.component.html",
  styleUrls: ["./category-edit-detail.component.scss"]
})
export class CategoryEditDetailComponent implements OnChanges {
  @Input() categ: Category;
  @Output() updatedCateg: EventEmitter<Category> = new EventEmitter<Category>();

  catDetailsObs: Observable<Category>;
  catDetails: Category = new Category();
  catDetailsCopy: Category = new Category();
  editable: Boolean = false;

  Categories: Category[] = [];
  CategoriesV: Category[] = [];

  constructor(
    private srv: CategoryManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  update() {
    Object.assign(this.catDetailsCopy, this.catDetails);
    this.editable = true;
  }

  getDetails(Id: number | string) {
    this.catDetailsObs = this.srv.getCatDetails(+Id);
    this.catDetailsObs.subscribe(res => {
      this.catDetails = res;
    });
  }

  Save() {

    this.srv.putCat(this.catDetails).subscribe(res => {
    
      this.updatedCateg.emit(res);
    });
  }

  Cancel() {}

  ngOnChanges() {
    this.editable = false;
    Object.assign(this.catDetails, this.categ);
  }
}
