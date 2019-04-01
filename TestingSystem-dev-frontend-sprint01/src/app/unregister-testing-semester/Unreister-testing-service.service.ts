import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { Console } from '@angular/core/src/console';

@Injectable({
   providedIn: 'root'
})
export class UnUserTestingServiceService {
    // httpOptions: any;

    readonly httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json',

      })
   };

   constructor(private http: HttpClient,private tokenStorage: TokenStorageService) {
     var token=this.tokenStorage.getToken();
    // this.httpOptions = new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'Authorization':token
    //   'Content-Type': 'application/json',
    //   'Authorization': 'my-auth-token'
    // })

    // console.log(JSON.stringify(this.httpOptions));

     console.log(token+"::" +this.tokenStorage.getToken()+"::"+this.tokenStorage.getUsername());

   }


   getExam(semesterId: string, testId: string): Observable<any> {
      return this.http.get(`http://localhost:8080/test/semesters/${semesterId}/tests/${testId}`);
   }
/**???????? */
   submitResultTest(testId: number, data: any): Observable<any> {
    //  this.httpOptions.Authorization;
      return this.http.post<any>(`http://localhost:8080/tests/${testId}`, JSON.stringify(data), this.httpOptions)
         .pipe(
         );
   }

   getResultTest(semesterId: string, testId: string): Observable<any> {
      return this.http.get(`http://localhost:8080/semesters/${semesterId}/result/${testId}`);
   }
}
