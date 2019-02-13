import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './semester/list/list.component';
import { CreateComponent } from './semester/create/create.component';
import { DetailComponent } from './semester/detail/detail.component';
import { InfoComponent } from './semester/detail/info/info.component';
import { ReportComponent } from './semester/detail/report/report.component';
import { CandidateComponent } from './semester/detail/candidate/candidate.component';
import { ExamComponent } from './semester/detail/exam/exam.component';

const managerSemesterRouting: Routes = [
   {
      path: 'manager/semester',
      children: [
         {
            path: '',
            component: ListComponent,
         },
         {
            path: 'create',
            component: CreateComponent
         },
         {
            path: ':id',
            component: DetailComponent,
         },
      ]
   }
]

@NgModule({
   imports: [RouterModule.forRoot(managerSemesterRouting)],
   exports: [RouterModule]
}) export class SemesterExamRoutingModule {

}
