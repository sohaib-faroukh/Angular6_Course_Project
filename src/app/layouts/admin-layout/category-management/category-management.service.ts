import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  Url,
  PostHeaders,
  PutHeaders,
  DeleteHeaders
} from "src/app/Config/config";
import { Category } from "src/app/Models/Category";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CategoryManagementService {
  headers_object;

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {

    // return of(data);

    return this.http.get<Category[]>(Url + "api/categories");

  }

  getCatDetails(Id: number): Observable<Category> {

    // return of(data.find(ele => ele.Id == Id));

    return this.http.get<Category>(`${Url}api/Category/${Id}`);
  }

  postCat(cat: Category): Observable<Category> {


    data.concat(data, cat);
    // return of(cat);

    return this.http.post<Category>(`${Url}api/categories/`, cat, {
      headers: PostHeaders
    });
  }

  putCat(cat: Category): Observable<Category> {
    let ix = data.findIndex(el => el.Id == cat.Id);
    data[ix] = cat;
    // return of(cat);

    return this.http.put<Category>(`${Url}api/categories/${cat.Id}`, cat, {
      headers: PutHeaders
    });
  }

  deleteCat(cat: Category): Observable<Category> {

    let ix = data.findIndex(el => el.Id == cat.Id);

    data.splice(ix, 1);

    // return of(data[ix]);

    return this.http.delete<Category>(`${Url}api/categories/${cat.Id}`, {
      headers: DeleteHeaders
    });
  }
}

const data: Category[] = [
  { Id: 1, Name: "categ-test1", ImageUrl: "assets/images/it.png" },
  { Id: 2, Name: "categ-test2", ImageUrl: "assets/images/it.png" },
  { Id: 3, Name: "categ-test3", ImageUrl: "assets/images/it.png" },
  { Id: 4, Name: "categ-test4", ImageUrl: "assets/images/it.png" }
];
