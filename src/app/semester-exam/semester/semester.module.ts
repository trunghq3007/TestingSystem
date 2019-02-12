import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemesterRoutingModule } from './semester-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './detail/info/info.component';
import { ReportComponent } from './detail/report/report.component';
import { CandidateComponent } from './detail/candidate/candidate.component';
import { ExamComponent } from './detail/exam/exam.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, EditComponent, CreateComponent, InfoComponent, ReportComponent, CandidateComponent, ExamComponent],
  imports: [
    CommonModule,
    SemesterRoutingModule
  ]
})
export class SemesterModule { }
