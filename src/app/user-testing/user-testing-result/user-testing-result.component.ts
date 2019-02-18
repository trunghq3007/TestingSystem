import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-user-testing-result',
   templateUrl: './user-testing-result.component.html',
   styleUrls: ['./user-testing-result.component.css']
})
export class UserTestingResultComponent implements OnInit {

   constructor() { }

   ngOnInit() {
      console.log("vao user testing result")
   }

}
