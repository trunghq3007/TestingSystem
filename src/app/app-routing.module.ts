import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemesterExamModule } from './semester-exam/semester-exam.module';
import { UserTestingComponent } from './user-testing/user-testing.component';

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
   },
   {
      path: 'semester',
      pathMatch: 'full',
      redirectTo: '/semester'
   }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes),
      SemesterExamModule],
   exports: [RouterModule]
})
export class AppRoutingModule { }
