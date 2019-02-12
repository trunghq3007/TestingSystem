import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ],
  exports: [DetailComponent]
})
export class CandidateModule { }
