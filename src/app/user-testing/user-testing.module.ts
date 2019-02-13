import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestingComponent } from './user-testing.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
   declarations: [UserTestingComponent],
   imports: [
      CommonModule,
      ModalModule.forRoot(),
   ],
   exports: [UserTestingComponent]
})
export class UserTestingModule { }
