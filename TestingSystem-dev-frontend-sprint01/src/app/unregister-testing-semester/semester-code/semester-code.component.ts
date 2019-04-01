import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-semester-code',
  templateUrl: './semester-code.component.html',
  styleUrls: ['./semester-code.component.css']
})
export class SemesterCodeComponent implements OnInit {
  tests;
  semesterExamCode = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }
  showSemesterTest() {
    if (this.semesterExamCode !== '') {
      this.http
        .get(`http://localhost:8080/semester-code/${this.semesterExamCode}`)
        .subscribe(ob => {
          this.tests = ob;
          console.log(this.tests);
        });
    }
  }

  change(e) {
    this.semesterExamCode = e.value;
    //console.log(this.semesterExamCode);
  }
}
