import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsComponent } from './cms.component';
import { ListExamComponent } from '../exam/list-exam/list-exam.component';
import { ListQuestionComponent } from '../question/list-question/list-question.component';

const routes: Routes = [
  {
    path: 'cms',
    children: [
      {
        path: '',
        component: CmsComponent,
        pathMatch: 'full'
      },
      {
        path: 'exam',
        component: ListExamComponent,
        pathMatch: 'full'
      },
      {
        path: 'question',
        component: ListQuestionComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
