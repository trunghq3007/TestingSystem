import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from './model/User.interface';
import { Test } from '../semester-exam/semester/detail/test-result/test.interface';

@Component({
   selector: 'app-user-testing',
   templateUrl: './user-testing.component.html',
   styleUrls: ['./user-testing.component.css']
})
export class UserTestingComponent implements OnInit {
   duration: number;
   user: User;
   test: Test;
   modalRef: BsModalRef;
   constructor(private modalService: BsModalService) { }

   openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
   }

   ngOnInit() {
      console.log("vao user testing component")
   }
}
