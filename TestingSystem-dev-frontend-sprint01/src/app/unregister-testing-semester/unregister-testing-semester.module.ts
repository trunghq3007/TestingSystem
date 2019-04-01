import { NgModule } from '@angular/core';
import { UnregisterTestingSemesterComponent } from './unregister-testing-semester.component';
import { CommonModule } from '@angular/common';
import { UnregisterTestingSemesterRoutingModule } from './Unregister-testing-semester-routing';
import { RouterModule } from '@angular/router';
import { SemesterCodeComponent } from './semester-code/semester-code.component';
import { UnregisterTestingResultComponent } from './unregister-testing-result/unregister-testing-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UnregisterTestingSemesterComponent, SemesterCodeComponent, UnregisterTestingResultComponent],
  imports: [
    CommonModule,
    UnregisterTestingSemesterRoutingModule,
    RouterModule,
    CommonModule,
    ModalModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [UnregisterTestingSemesterComponent]

}) export class UnregisterTestingSemesterModule {

}
