import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestingComponent } from './user-testing.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserTestingRoutingModule } from './user-testing-routing.module';
import { UserTestingResultComponent } from './user-testing-result/user-testing-result.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [UserTestingComponent, UserTestingResultComponent],
   imports: [
      CommonModule,
      ModalModule.forRoot(),
      UserTestingRoutingModule,
      RouterModule,
      HttpClientModule
   ],
   exports: [UserTestingComponent]
})
export class UserTestingModule { }
