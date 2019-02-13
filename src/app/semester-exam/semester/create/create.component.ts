import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';

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

   constructor(private fb: FormBuilder) {
   }

   ngOnInit() {
      this.ckeConfig = {
         allowedContent: false,
         extraPlugins: 'divarea',
         forcePasteAsPlainText: true
      };

      this.profileFrm = this.fb.group({
         semesterName: ['', [Validators.required, Validators.minLength(5)]],
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

   }

}
