import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterDetailComponent } from './admin/semester-detail/semester-detail.component';
import { SemesterListComponent } from './admin/semester-list/semester-list.component';
import { CandidateListComponent } from './admin/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './admin/candidate-detail/candidate-detail.component';
import { TestListComponent } from './admin/test-list/test-list.component';
import { TestDetailComponent } from './admin/test-detail/test-detail.component';
import { StatisticalComponent } from './admin/statistical/statistical.component';
import { CandidateCreateComponent } from './admin/candidate-create/candidate-create.component';
import { SemesterCreateComponent } from './admin/semester-create/semester-create.component';
import { TestCreateComponent } from './admin/test-create/test-create.component';
import { SemesterExamRoutingModule } from './semester-exam-routing.module';
import { SemesterEditComponent } from './admin/semester-edit/semester-edit.component';
import { CommonComponent } from './admin/common/common.component';

@NgModule({
  declarations: [SemesterDetailComponent,
    SemesterListComponent, CandidateListComponent,
    CandidateDetailComponent, TestListComponent,
    TestDetailComponent, StatisticalComponent,
    CandidateCreateComponent, SemesterCreateComponent,
    TestCreateComponent, SemesterEditComponent, CommonComponent],

  imports: [
    CommonModule,
    SemesterExamRoutingModule
  ],
  exports: []

})
export class SemesterExamModule { }
