import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/semester-exam/service/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Test } from './test.interface';

@Component({
   selector: 'app-test-result',
   templateUrl: './test-result.component.html',
   styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {
   data = [];
   exam = [];
   testFrm: FormGroup;
   @Input()
   semester_id: string;
   constructor(private fb: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private service: ApiService) { }

   ngOnInit() {
      console.log(this.semester_id);

      this.getAll();
      this.getAllExam();
      this.testFrm = this.fb.group({
         testID: null,
         testName: ['', [Validators.required, Validators.minLength(5)]],
         status: 1,
         exam: this.fb.group({
            examId: ['', [Validators.required, Validators.minLength(5)]]
         }),
         semesterExam: {
            id: this.semester_id
         }
      });
   }
   getAll() {
      this.service.getAll(`test/listBySemester/${this.semester_id}`).subscribe(result => {
         console.log(result);
         this.data = result;
      });
   }
   getAllExam() {
      this.service.getAll("exam/listExams").subscribe(result => {
         console.log(result);
         this.exam = result;
      });
   }
   onSubmit() {
      console.log(this.testFrm.value)
      try {
         const value = this.testFrm.value;
         const test: Test = { ...value };
         this.service.saveOne('test/add', test).subscribe(data => {
            console.log("them thanh cong");
            this.getAll();
         });
      } catch (error) {
         console.log(error);

      }
   }



}

