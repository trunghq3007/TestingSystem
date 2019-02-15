import { NgModule } from "@angular/core";
import { UnregisterTestingSemesterComponent } from './unregister-testing-semester.component';
import { CommonModule } from '@angular/common';
import { UnregisterTestingSemesterRoutingModule } from './Unregister-testing-semester-routing';
import { SemesterCodeComponent } from './semester-code/semester-code.component';
import { SemesterInfoComponent } from './semester-info/semester-info.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UnregisterTestingComponent } from './unregister-testing/unregister-testing.component';

@NgModule({
   declarations: [
      UnregisterTestingSemesterComponent,
      SemesterCodeComponent,
      SemesterInfoComponent,
      UnregisterTestingComponent
   ],
   imports: [
      CommonModule,
      ModalModule.forRoot(),
      UnregisterTestingSemesterRoutingModule
   ],
   exports: [
      UnregisterTestingSemesterComponent,

   ]

}) export class UnregisterTestingSemesterModule {

}
