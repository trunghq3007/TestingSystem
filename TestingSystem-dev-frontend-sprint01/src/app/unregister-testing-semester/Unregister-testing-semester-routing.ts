import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UnregisterTestingSemesterComponent } from './unregister-testing-semester.component';
import { SemesterCodeComponent } from './semester-code/semester-code.component';
import { SemesterInfoComponent } from './semester-info/semester-info.component';
import { UnregisterTestingResultComponent } from './unregister-testing-result/unregister-testing-result.component';

const routes: Routes = [

  //  {
  //     path: 'guest/semesters/:semesterCode',
  //     component: UnregisterTestingSemesterComponent
  //  }
  {
    path: 'unregister',
    children: [
      {
        path: '',
        component: SemesterCodeComponent,
        pathMatch: 'full'
      },
      {
        path: 'semesters/:semesterId/testing/:examId',
        component: UnregisterTestingSemesterComponent
      },
      {

        path: 'semester/:semesterId/result/:examId',
        component: UnregisterTestingResultComponent,

      }


    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
}) export class UnregisterTestingSemesterRoutingModule {

}
