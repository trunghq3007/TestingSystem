import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/semester-exam/service/api.service';
import { Router } from '@angular/router';
import { SemesterExam } from '../../model/SemesterExam';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
   selector: 'app-info',
   templateUrl: './info.component.html',
   styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
   public obj: any = {}
   data: FormGroup;
   @Input() semester_id: string;
   ckeConfig: any;
   @ViewChild("myckeditor") ckeditor: any;

   startTime: Date;
   endTime: Date;

   // public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

   constructor(private fb: FormBuilder, private service: ApiService, private router: Router, private _bsDatepickerConfig: BsDatepickerConfig) {
   }

   ngOnInit() {
      this.getOneByID(this.semester_id);
      this.data = this.fb.group({
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

      // this._bsDatepickerConfig.dateInputFormat = 'DD/MM/YYYY';
      // this.dpConfig.dateInputFormat = 'DD/MM/YYYY';
   }

   getOneByID(id: string) {
      this.service.getOne('semesterexam/getone', id).subscribe(result => {
         this.obj = result.data;
         const semesterUser: SemesterExam = result.data;
         this.data.patchValue(semesterUser);
         console.log(this.data.value);
         /// console.log(semesterUser);
      });
   }

   save() {
      console.log(this.data.value)
      try {
         const value = this.data.value;
         const test: SemesterExam = { ...value };
         this.service.saveOne('semesterexam/add', test).subscribe(data => {
            console.log(data);
         });
      } catch (error) {
         console.log(error);
      }
   }

   comeBack() {
      this.router.navigateByUrl("manager/semester")
   }
   onsubmit() {

   }
}
