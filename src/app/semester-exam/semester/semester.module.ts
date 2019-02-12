import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CKEditorModule } from 'ng2-ckeditor';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SemesterRoutingModule } from './semester-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './detail/info/info.component';
import { ReportComponent } from './detail/report/report.component';
import { CandidateComponent } from './detail/candidate/candidate.component';
import { ExamComponent } from './detail/exam/exam.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule } from '@angular/material';


@NgModule({
   declarations: [ListComponent, DetailComponent, EditComponent, CreateComponent, InfoComponent, ReportComponent, CandidateComponent, ExamComponent],
   imports: [
      CommonModule,
      SemesterRoutingModule,
      CKEditorModule,
      MatDatepickerModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatDatepickerModule,
      MatNativeDateModule
   ]
})
export class SemesterModule { }
