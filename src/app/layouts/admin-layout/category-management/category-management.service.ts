import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Url } from "src/app/Config/config";
import { Category } from 'src/app/Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {


  constructor(private http:HttpClient) { }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(Url +"api/categories");
  }

  getCatDetails(Id:number): Observable<Category> {
    return this.http.get<Category>(`${Url}api/Category/${Id}`);
  }



}
