import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategory: Category;
  categories: Category[];
  readonly URL_API = 'http://localhost:3000/servicio/';

  constructor(private http: HttpClient) {
    this.selectedCategory = new Category();
  }

  getCategories() {
    return this.http.get(this.URL_API);
  }

  postCategory(category: Category) {
    return this.http.post(this.URL_API, category);
  }

  putCategory(category: Category) {
    return this.http.put(this.URL_API + `/${category.idplan_servicio}`, category);
  }

  deleteCategory(idplan_servicio: string) {
    return this.http.delete(this.URL_API + `/${idplan_servicio}`);
  }
}
