import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestingComponent } from './user-testing.component';

@NgModule({
   declarations: [UserTestingComponent],
   imports: [
      CommonModule
   ],
   exports: [UserTestingComponent]
})
export class UserTestingModule { }
