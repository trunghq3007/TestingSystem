import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsComponent } from './cms.component';

const routes: Routes = [
  {
    path: 'cms',
    children: [
      {
        path: '',
        component: CmsComponent,
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
