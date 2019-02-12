import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
   selector: 'app-create',
   templateUrl: './create.component.html',
   styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   ckeConfig: any;
   log: string = '';
   @ViewChild("myckeditor") ckeditor: any;

   constructor() {
   }

   ngOnInit() {
      this.ckeConfig = {
         allowedContent: false,
         extraPlugins: 'divarea',
         forcePasteAsPlainText: true
      };
   }

   onChange(event: any): void {
      console.log(event);
   }

}
