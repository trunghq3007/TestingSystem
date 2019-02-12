import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [EditComponent, CreateComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
