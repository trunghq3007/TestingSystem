import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserTestingComponent } from './user-testing.component';

const routes: Routes = [
   {
      path: 'semester/:semesterId/testing/:examId',
      component: UserTestingComponent
   }
]

@NgModule({

   imports: [
      RouterModule.forChild(routes)
   ]

}) export class UserTestingRoutingModule {

}
