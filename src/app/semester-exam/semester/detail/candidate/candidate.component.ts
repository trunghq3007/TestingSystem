import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/semester-exam/service/api.service';
import { Candidate } from 'src/entity/Candidate';

@Component({
   selector: 'app-candidate',
   templateUrl: './candidate.component.html',
   styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
   data = [];
   user = [];
   candidateList = [];
   CandidateFrm: FormGroup;
   @Input()
   semester_id: string;
   selectedAll: any;
   arrDelete: any = [];
   isCheck: boolean = false;
   public obj = {};
   configPagination1: any;

   constructor(private fb: FormBuilder,
      private http: HttpClient,
      private router: Router,
      private service: ApiService) {
      this.configPagination1 = {
         currentPage: 1,
         itemsPerPage: 8
      };
   }

   ngOnInit() {
      this.getAll();
      this.getAllUser();
      this.getCandidateList();
      this.CandidateFrm = this.fb.group({
         id: null,
         user: this.fb.group({
            userId: [null, []]
         }),
         semesterExam: {
            id: this.semester_id
         }
      });
   }

   isCheckAll(event: any) {
      if (event.target.checked) {
         this.isCheck = true;
         var othis = this;
         this.candidateList.filter(function (item) {
            othis.arrDelete.push(item.id);
         })

      } else {
         this.isCheck = false;
         this.arrDelete = [];
      }
   }

   getId(event: any) {
      if (event.target.checked) {
         this.arrDelete.push(event.target.value);
      } else {
         this.arrDelete = this.arrDelete.filter(item => item !== event.target.value);
      }
   }

   deleteItem() {
      if (this.arrDelete.length == 0) {
         alert("Chưa chọn kỳ thi để xóa");
      } else {
         var temp = confirm("Bạn có chắc chắn muốn xóa không?");
         if (temp) {
            for (let i = 0; i < this.arrDelete.length; i++) {
               this.service.deleteTest(`candidate/delete/${this.arrDelete[i]}`).subscribe(result => {
                  this.candidateList = result.data;
                  this.getAll();
               });
            }
            this.arrDelete = [];
         }
      }

   }

   getCandidateList() {
      this.service.getAll("candidate/listCandidate").subscribe(result => {
         this.candidateList = result;
      });
   }
   getAll() {
      this.service.getAll(`candidate/listBySemester/${this.semester_id}`).subscribe(result => {
         this.data = result;
         console.log(this.semester_id);
      });
   }
   getAllUser() {
      this.service.getAll("user/listuser").subscribe(result => {
         this.user = result;
      });
   }

   onSubmit() {
      console.log(this.CandidateFrm.value)
      try {
         const value = this.CandidateFrm.value;
         const test: Candidate = { ...value };
         this.service.saveOne('candidate/add', test).subscribe(data => {
            console.log("them thanh cong");
            this.getAll();
         });
      } catch (error) {
         console.log(error);
      }
   }
}
