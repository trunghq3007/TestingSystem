import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/semester-exam/service/api.service';
import { Router } from '@angular/router';
import { SemesterExam } from '../../model/SemesterExam';

@Component({
   selector: 'app-info',
   templateUrl: './info.component.html',
   styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
   public time = new Date();
   public buttonName: any = 'Show';
   public obj: {}
   object = {}
   arrDelete: any = [];
   edit: FormGroup;
   create: FormGroup;
   @Input() semester_id: string;
   ckeConfig: any;
   @ViewChild("myckeditor") ckeditor: any;
   public semesterExamList = [];
   totalRecord: number;

   constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {

   }

   ngOnInit() {
      this.getOneByID(this.semester_id);
      this.edit = this.fb.group({
         id: '',
         name: ['', [Validators.required]],
         user: this.fb.group({
            userId: '',
            fullName: ['']
         }),
         status: ['', [Validators.required]],
         startTime: ['', [Validators.required]],
         endTime: [new Date(), [Validators.required]],
         description: ['', [Validators.required]],
      });

   }

   getOneByID(id: string) {

      this.service.getOne('semesterexam/getone', id).subscribe(result => {
         this.obj = result.data;
         const semesterUser: SemesterExam = result.data;
         this.edit.patchValue(semesterUser);

         console.log(this.edit.value);
         /// console.log(semesterUser);
      });
   }

   save() {
      console.log(this.edit.value)
      try {
         const value = this.edit.value;
         const test: SemesterExam = { ...value };
         this.service.saveOne('semesterexam/add', test).subscribe(data => {
            console.log(data);
         });
      } catch (error) {
         console.log(error);
      }
   }
   onsubmit() {

   }
}
