import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './admin/candidate-list/candidate-list.component';
import { CandidateCreateComponent } from './admin/candidate-create/candidate-create.component';
import { CandidateDetailComponent } from './admin/candidate-detail/candidate-detail.component';
import { SemesterListComponent } from './admin/semester-list/semester-list.component';
import { SemesterCreateComponent } from './admin/semester-create/semester-create.component';
import { SemesterDetailComponent } from './admin/semester-detail/semester-detail.component';
import { SemesterEditComponent } from './admin/semester-edit/semester-edit.component';
import { TestListComponent } from './admin/test-list/test-list.component';
import { TestCreateComponent } from './admin/test-create/test-create.component';
import { TestDetailComponent } from './admin/test-detail/test-detail.component';
import { StatisticalComponent } from './admin/statistical/statistical.component';

const managerSemesterRouting: Routes = [
  {
    path: 'manager',
    children: [
      {
        path: 'semesters',
        children: [
          {
            path: '',
            component: SemesterListComponent
          },
          {
            path: 'create',
            component: SemesterCreateComponent
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                component: SemesterDetailComponent
              },
              {
                path: 'edit',
                component: SemesterEditComponent
              },
              {
                path: 'candidates',
                children: [
                  {
                    path: '',
                    component: CandidateListComponent
                  },
                  {
                    path: 'create',
                    component: CandidateCreateComponent
                  },
                  {
                    path: ':id',
                    component: CandidateDetailComponent
                  }
                ]
              },
              {
                path: 'tests',
                children: [
                  {
                    path: '',
                    component: TestListComponent
                  },
                  {
                    path: 'create',
                    component: TestCreateComponent
                  },
                  {
                    path: ':id',
                    component: TestDetailComponent
                  }
                ]
              },
              {
                path: 'statistical',
                component: StatisticalComponent
              }
            ]
          }
        ]
      },
    ]

  }
]

@NgModule({
  imports: [RouterModule.forRoot(managerSemesterRouting)],
  exports: [RouterModule]
}) export class SemesterExamRoutingModule {

}
