import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserTestingSemesterComponent } from './user-testing-semester.component';

const routes: Routes = [
   {
      path: 'semester',
      component: UserTestingSemesterComponent,
      children: [
      ]
   }
]
@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ]
}
) export class UserTestingSemesterRoutingModule {

}
