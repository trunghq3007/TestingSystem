import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SemesterExam } from '../../models/SemesterExam';
import { ApiService } from '../../service/api.service';

@Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   ckeConfig: any;
   log: string = '';
   @ViewChild("myckeditor") ckeditor: any;

   obj = {};

   profileFrm: FormGroup;

   constructor(private fb: FormBuilder, private router: Router, private service: ApiService) {
   }

   ngOnInit() {
      this.ckeConfig = {
         allowedContent: false,
         extraPlugins: 'divarea',
         forcePasteAsPlainText: true
      };

      this.profileFrm = this.fb.group({
         name: ['', [Validators.required, Validators.minLength(5)]],
         startTime: [],
         endTime: [],
         description: [],
      });

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
         const semesterExam: SemesterExam = { ...value };
         console.log(semesterExam);
         this.service.saveOne('semesterexam/add', semesterExam).subscribe(data => {
            console.log(data);
            this.router.navigateByUrl('manager/semester');
         });
      } catch (error) {
         console.log(error);

      }
   }

}
