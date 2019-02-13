import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from 'src/entity/Category';
import { Level } from 'src/entity/Level';
import { Question } from 'src/entity/Question';
import { Tag } from 'src/entity/Tag';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "http://localhost:8080/";
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:8080'
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  //==========QUESTION=============
  //get list question
  getListQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + `question/all`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }
  private baseUrl = 'http://localhost:8080/api/tag';

  getTag(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTag(tag: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, tag);
  }
  //abc

  //update multi question
  updateMutilQuestion(question: Question, id: string): Observable<Question> {
    return this.http.patch<Question>(this.url + `question/edit/${id}`, question, this.httpOption).pipe(
      tap()
    );
  }
  //==========LEVEL=============
  //get all level
  getAllLvl(): Observable<Level[]> {
    return this.http.get<Level[]>(this.url + `level`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }
  //==========CATEGORY=============
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + `category`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }
  //==========TAG=============
  getAllTag(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url + `tag`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }
}
