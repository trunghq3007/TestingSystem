import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
   semestercode: string = "";
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

         semesterExamCode: this.fb.group({
            code: []
         })

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

      try {
         const value = this.data.value;
         const test: SemesterExam = { ...value };
         const code = this.data.get("semesterExamCode") as FormArray;
         test.semesterExamCode = [code.value];
         console.log(test);
         this.service.saveOne('semesterexam/add', test).subscribe(data => {

            console.log(data);
         });
      } catch (error) {
         console.log(error);
      }
      //console.log()
   }

   comeBack() {
      this.router.navigateByUrl("manager/semester")
   }
   onsubmit() {

   }

   radomString() {
      var text_radom = Math.random().toString(36).substring(3);
      var text_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var text_number = "0123456789";
      for (var i = 0; i < 3; i++)
         text_radom += text_str.charAt(Math.floor(Math.random() * text_str.length));
      for (var i = 0; i < 2; i++)
         text_radom += text_number.charAt(Math.floor(Math.random() * text_number.length));
      this.semestercode = text_radom;
      var obj = {
         semesterExamCode: {
            code: this.semestercode
         }
      };
      this.data.patchValue(obj);
   }

}
