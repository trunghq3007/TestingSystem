import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/semester-exam/service/api.service';
@Component({
   selector: 'app-report',
   templateUrl: './report.component.html',
   styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

   @Input()
   semesterExamCode:string;
   data = Object;
   constructor(private apiService: ApiService) { }

   ngOnInit() {
      this.getData();
   }
   getData() {
      this.apiService.getData(`semesterexam/info/${this.semesterExamCode}`).subscribe(
         result => {
            this.data = result;
            // console.log
         },
         error => {

         }
      );
   }

}
