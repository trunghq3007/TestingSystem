import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/entity/Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl ='http://localhost:8081/category';
  constructor(
    private http: HttpClient
  ) {}

  // lay danh sach Category
  getCategoryList(){
    return this.http.get<Category[]>(this.baseUrl);
  }

  // lay tung Category theo id
  getCategory(id: number) {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  // them moi category
  createCategory(category: Category) {
    return this.http.post(this.baseUrl, category);
  }

  // edit category theo id
  updateCategory(id: number, category: Category) {
    return this.http.patch(`${this.baseUrl}/${id}`, category);
  }

  // delete category theo id
  deleteCategory(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
