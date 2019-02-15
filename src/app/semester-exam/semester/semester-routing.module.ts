import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
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
         }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SemesterRoutingModule { }
