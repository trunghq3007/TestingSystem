import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SemesterExam } from '../models/SemesterExam';

@Injectable({
   providedIn: 'root'
})
export class ApiService {
   private baseUrl: string = '//localhost:8080/';

   constructor(private http: HttpClient) { }

   getAll(nameapi: string): Observable<any> {
      var newUrl = this.baseUrl + nameapi;
      return this.http.get(newUrl);
   }

   saveOne(nameapi: string, semesterExam: SemesterExam) {
      return this.http.post(this.baseUrl + nameapi, semesterExam);
   }

}
