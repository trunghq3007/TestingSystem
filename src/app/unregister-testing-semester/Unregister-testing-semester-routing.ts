import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SemesterCodeComponent } from './semester-code/semester-code.component';
import { SemesterInfoComponent } from './semester-info/semester-info.component';
import { UnregisterTestingComponent } from './unregister-testing/unregister-testing.component';


const routes: Routes = [

   {
      path : "",
      component : SemesterCodeComponent
   },
   {
      path : "examination/detail",
      component : SemesterInfoComponent
   },
   {
      path : "examination/test",
      component : UnregisterTestingComponent
   }
]
@NgModule({
   imports: [
      RouterModule.forChild(routes)
   ],
   exports : [
      RouterModule
   ]
}) export class UnregisterTestingSemesterRoutingModule {

}
