import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemesterExamModule } from './semester-exam/semester-exam.module';

const routes: Routes = [
  {
    path: 'manager',
    children: [
      {
        path: 'question',
        pathMatch: 'full', redirectTo: '/question'
      },
    ]
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SemesterExamModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
