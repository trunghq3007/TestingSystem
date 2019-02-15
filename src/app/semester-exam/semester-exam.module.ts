import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SemesterExamRoutingModule } from './semester-exam-routing.module';
import { SemesterModule } from './semester/semester.module';
@NgModule({
   declarations: [],

   imports: [
      CommonModule,
      BrowserAnimationsModule,
      SemesterExamRoutingModule,
      SemesterModule
   ],
   exports: []

})
export class SemesterExamModule { }
