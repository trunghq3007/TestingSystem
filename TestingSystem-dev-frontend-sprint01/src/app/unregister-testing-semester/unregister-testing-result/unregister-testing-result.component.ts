import { Component, OnInit } from '@angular/core';
import { TestResult } from '../model/TestResult.interface';
import { UnUserTestingServiceService } from '../Unreister-testing-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unregister-testing-result',
  templateUrl: './unregister-testing-result.component.html',
  styleUrls: ['./unregister-testing-result.component.css']
})
export class UnregisterTestingResultComponent implements OnInit {
  semesterId: string
  testId: string

  testResult: TestResult;
  constructor(private unregisterService:UnUserTestingServiceService,private activateRoute :ActivatedRoute,private route: Router, private http: HttpClient) { }

  ngOnInit() {
    this.initTestResult();
  }
  initTestResult() {
    this.activateRoute.paramMap.subscribe(params => {
       this.semesterId = params.get('semesterId');
       this.testId = params.get('examId');
       console.log(this.semesterId,this.testId);
       this.unregisterService.getResultTest(this.semesterId, this.testId).subscribe(
          res => {
             console.log(res);
             this.testResult = res.data;
             this.testResult.tests = res.data.tests;
             this.testResult.numberOfQuestion = res.data.tests.exam.numberOfQuestion;
             console.log('result')
             console.log(this.testResult);
          },
          err => {
             console.log('not found 404')
          })
    }
    )
 }
}
