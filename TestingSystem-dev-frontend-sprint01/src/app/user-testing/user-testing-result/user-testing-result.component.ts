import { Component, OnInit } from '@angular/core';
import { UserTestingServiceService } from '../user-testing-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/semester-exam/semester/model/User';
import { TestResult } from '../model/TestResult.interface';
import { TokenStorageService } from 'src/app/auth/token-storage.service';


@Component({
   selector: 'app-user-testing-result',
   templateUrl: './user-testing-result.component.html',
   styleUrls: ['./user-testing-result.component.css']
})
export class UserTestingResultComponent implements OnInit {
   semesterId: string;
   testId: string;
   private roles: string[];
   testResult: TestResult;
   user: any;
   private authority: string;
   constructor(private userTestingService: UserTestingServiceService, private activateRoute: ActivatedRoute, private route: Router, private http: HttpClient,private tokenStorage: TokenStorageService) { }

   ngOnInit() {
    this.user = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities(),
      userId: this.tokenStorage.getUserId()
    };
      this.initTestResult();
   }

   initTestResult() {
      this.activateRoute.paramMap.subscribe(params => {
         this.semesterId = params.get('semesterId');
         this.testId = params.get('examId');
         console.log(this.semesterId + ' vs' + this.testId);
         this.userTestingService.getResultTest(this.user.userId, this.semesterId, this.testId).subscribe(
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
