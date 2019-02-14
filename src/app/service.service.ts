import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Question } from 'src/entity/Question';
import { Level } from 'src/entity/Level';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = "http://localhost:8080/";
  constructor(
    private http: HttpClient
  ) { }

  getListQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url+`question/all`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }

  getListQuestionByContent(content:String): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + `question/search-by-content/${content}`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }

  getListLvl(): Observable<Level[]> {
    return this.http.get<Level[]>(this.url+`level`).pipe(
      tap(),
      catchError(er => of([]))
    );
  }
}
