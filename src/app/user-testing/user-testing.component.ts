import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from './model/User.interface';
import { UserTestingServiceService } from './user-testing-service.service';
import { ActivatedRoute } from '@angular/router';
import { Test } from '../semester-exam/semester/detail/test-result/test.interface';
import { Exam } from './model/Exam.interface';
import { Question } from './model/Question.interface';
import { HttpClient } from '@angular/common/http';
import { ExamQuestion } from './model/ExamQuestion.interface';
import { Answer } from './model/Answer.interface';
import { TestingResult } from './model/TestingResutl';

@Component({
   selector: 'app-user-testing',
   templateUrl: './user-testing.component.html',
   styleUrls: ['./user-testing.component.css']
})
export class UserTestingComponent implements OnInit {
   semesterId: string;
   testId: string;

   user: User = {
      userId: 1,
      fullName: "Nguyen Van Diem",
      mobile: "0965298776",
      password: "1234",
      email: "diemnvvn@gmail.comm",
      status: 1
   };

   test: Test;
   exam: Exam;
   duration: string;
   examQuestion: ExamQuestion[];
   testingAnswer: TestingResult[];
   labelOption = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

   modalRef: BsModalRef;
   constructor(private modalService: BsModalService, private userTestingService: UserTestingServiceService, private route: ActivatedRoute, private http: HttpClient) { }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   ngOnInit() {
      this.initTest();

   }
   initTest() {
      this.route.paramMap.subscribe(params => {
         this.semesterId = params.get('semesterId');
         this.testId = params.get('testId');
         this.userTestingService.getExam(this.semesterId, this.testId).subscribe(res => {
            this.test = res.data;
            this.exam = res.data.exam;
            this.duration = res.data.exam.duration;
            this.examQuestion = res.data.exam.examQuestions;
            console.log(this.examQuestion[0]);
            this.examQuestion.forEach(el => {
               el.choiceOrderList = el.choiceOrder.split(" ").map(Number);
            })
         })
      }
      )
   }

   viewQuestion(questionId: string) {
      console.log('id: ' + questionId);
      document.getElementById(questionId).scrollIntoView();
   }

   initTestingAnswer() {
      this.examQuestion.forEach(el => {
      })
   }
}
