import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { SemesterExam } from '../../models/SemesterExam';

@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   selectedAll: any;
   public semesterExamList: SemesterExam;

   constructor(private service: ApiService) { }

   getId(event: any) {
      console.log(event);
   }

   deleteItem() {

   }

   ngOnInit() {
      this.service.getAll('semesterexam/all').subscribe(result => {
         this.semesterExamList = result.data;
         console.log(this.semesterExamList);
      });
   }
}
