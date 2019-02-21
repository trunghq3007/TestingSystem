import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserTestingComponent } from './user-testing.component';
import { UserTestingResultComponent } from './user-testing-result/user-testing-result.component';

const routes: Routes = [
   {
      path: 'semester/:semesterId/testing/:testId',
      component: UserTestingComponent,
   },
   {
      path: 'semester/:semesterId/result/:resultId',
      component: UserTestingResultComponent,
   }

]

@NgModule({

   imports: [
      RouterModule.forChild(routes)
   ]

}) export class UserTestingRoutingModule {

}
