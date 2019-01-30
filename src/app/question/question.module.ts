import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuestionComponent } from './list-question/list-question.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { IplistQuestionComponent } from './iplist-question/iplist-question.component';

@NgModule({
  declarations: [
    ListQuestionComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    ViewQuestionComponent,
    IplistQuestionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListQuestionComponent,
    CreateQuestionComponent,
    EditQuestionComponent,
    ViewQuestionComponent,
    IplistQuestionComponent
  ]
})
export class QuestionModule { }
