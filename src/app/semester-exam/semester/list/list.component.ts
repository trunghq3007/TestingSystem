import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { SemesterExam } from '../../models/SemesterExam';

@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   keyword: string = "";
   selectedAll: any;
   id: string;
   public semesterExamList: SemesterExam;

   constructor(private service: ApiService) { }



   enter(event) {
      if (event.key == "Enter") {
         this.searchByKeyword();
      }
   }

   getId(event: any) {
      console.log(event);
      this.id = event;
   }

   deleteItem() {
      var temp = confirm("Bạn có chắc chắn muốn xóa không?");
      if (temp) {
         this.service.delete('semesterexam/delete', this.id).subscribe(result => {
            console.log(result.data);
            this.semesterExamList = result.data;
         });
      }
   }

   searchByKeyword() {
      if (this.keyword == "") {
         this.service.getAll('semesterexam/all').subscribe(result => {
            this.semesterExamList = result.data;
            console.log(this.semesterExamList);
         });
      } else {
         this.service.search('semesterexam/search', this.keyword).subscribe(result => {
            this.semesterExamList = result.data;
         });
      }
   }

   ngOnInit() {
      this.service.getAll('semesterexam/all').subscribe(result => {
         this.semesterExamList = result.data;
         console.log(this.semesterExamList);
      });
   }
}
