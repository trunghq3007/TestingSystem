
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { SemesterExam } from '../model/SemesterExam';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   @ViewChild('staticTabs') staticTabs: TabsetComponent;

   keyword: string = "";
   selectedAll: any;
   modalRef: BsModalRef;
   arrDelete: any = [];
   isCheck: boolean = false;
   public obj = {};
   public objFilter = {
      name: '',
      status: 0,
      user: '',
      startTime: '',
      endTime: ''
   };
   public semesterExamList = [];
   configPagination: any;
   itempages: any = [2, 4, 6, 8];
   totalRecord: number;
   ckeConfig = {};
   constructor(private service: ApiService, private modalService: BsModalService) {
      this.configPagination = {
         currentPage: 1,
         itemsPerPage: 2
      }
      this.ckeConfig = { extraPlugins: 'divarea', height: 110, allowedContent: false, forcePasteAsPlainText: true, fontSize_defaultLabel: 22 }
   }

   changeItemsPerPage(event: number) {
      this.configPagination.itemsPerPage = event;
   }

   enterSearch(event) {
      if (event.key == "Enter") {
         this.searchByKeyword();
      }
   }

   getId(event: any) {
      if (event.target.checked) {
         this.arrDelete.push(event.target.value);
      } else {
         this.arrDelete = this.arrDelete.filter(item => item !== event.target.value);
      }
   }

   isCheckAll(event: any) {
      if (event.target.checked) {
         this.isCheck = true;
         var othis = this;
         this.semesterExamList.filter(function (item) {
            othis.arrDelete.push(item.id);
         })

      } else {
         this.isCheck = false;
         this.arrDelete = [];
      }
   }

   deleteItem() {
      if (this.arrDelete.length == 0) {
         alert("Chưa chọn kỳ thi để xóa");
      } else {
         var temp = confirm("Bạn có chắc chắn muốn xóa không?");
         if (temp) {
            for (let i = 0; i < this.arrDelete.length; i++) {
               this.service.delete('semesterexam/delete', this.arrDelete[i]).subscribe(result => {
                  this.semesterExamList = result.data;
               });
            }
            this.arrDelete = [];
         }
      }
   }

   semesterExamTrackByFn(semesterExam: SemesterExam) {
      return semesterExam.id;
   }

   searchByKeyword() {
      if (this.keyword == "") {
         this.service.getAll('semesterexam/all').subscribe(result => {
            this.semesterExamList = result.data;
         });
      } else {
         this.service.search('semesterexam/search', this.keyword).subscribe(result => {
            this.semesterExamList = result.data;
         });
      }
   }


   openModal(id: string, template: TemplateRef<any>) {
      this.service.getOne('semesterexam/getone', id).subscribe(result => {
         this.obj = result.data;
         // console.log(this.obj);
         this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
      })

   }

   getListSemesterExam() {
      this.service.getAll('semesterexam/all').subscribe(result => {
         this.semesterExamList = result.data;
         this.totalRecord = result.totalRecord;
      });
   }


   selectTab(tabId: number) {
      this.staticTabs.tabs[tabId].active = true;
   }

   getDataFilter() {
      console.log(this.objFilter);
      this.service.filter('semesterexam/filter', this.objFilter.name).subscribe(res => {
         console.log(res);
      })
   }

   object = {
      detail: {}
   }

   cloneSemesterExam() {
      console.log(this.obj);
      // this.obj.id = null
      try {
         this.service.saveOne('semesterexam/add', this.obj).subscribe(data => {
            console.log(data);
            this.modalRef.hide();
            this.getListSemesterExam();
         });
      } catch (error) {
         console.log(error.message)
      }
   }

   ngOnInit() {
      this.getListSemesterExam();
   }
}
