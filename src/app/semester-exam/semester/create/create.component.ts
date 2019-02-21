import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SemesterExam } from '../model/SemesterExam';
import { ApiService } from '../../service/api.service';

@Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   ckeConfig = {};
   @ViewChild("myckeditor") ckeditor: any;

   user = {
      userId: 3,
      fullName: "Pham Thi Phuong",
      email: "phuong@gmail.com",
      mobile: "0332132609",
      password: "123",
      status: 1,
   }

   profileFrm: FormGroup;
   constructor(private fb: FormBuilder, private router: Router, private service: ApiService) {
      this.ckeConfig = { extraPlugins: 'divarea', height: 110, allowedContent: false, forcePasteAsPlainText: true, fontSize_defaultLabel: 22 }
   }

   ngOnInit() {
      this.profileFrm = this.fb.group({
         name: ['', [Validators.required]],
         startTime: [new Date(), [Validators.required]],
         endTime: ['', [Validators.required]],
         description: '',
         creator: 1
      });
   }
   startTime: any;
   getStartTime(event: any) {
      if (event == 'Invalid Date') {
         this.startTime = new Date();
      }
   }

   getTime(event) {
      console.log(event);
      var d = new Date(event);
      console.log(d);
      console.log(d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());
      var h = new Date(d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear());
      console.log(h);
   }
   onChange(event: any): void {
      console.log(event);
   }

   onSubmit() {
      try {
         const value = this.profileFrm.value;

         const semesterExam: SemesterExam = {
            user: this.user,
            ...value
         };
         this.service.saveOne('semesterexam/add', semesterExam).subscribe(data => {
            this.router.navigateByUrl('manager/semester');
         });
      } catch (error) {
         console.log(error);
      }
   }

}
