import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTestingServiceService {
   baseUrl= 'http://localhost:8080/test/semesters/Semester001/tests/1';
  constructor() { }
}
