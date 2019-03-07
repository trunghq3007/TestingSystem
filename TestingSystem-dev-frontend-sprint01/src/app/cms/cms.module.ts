import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { NavModule } from '../nav/nav.module';
import { ExamModule } from '../exam/exam.module';
import { QuestionModule } from '../question/question.module';
import { GroupModule } from '../group/group.module';
import { MenuModule } from '../menu/menu.module';
import { RoleModule } from '../role/role.module';

@NgModule({
  declarations: [CmsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NavModule,
    GroupModule,
    MenuModule,
    ExamModule,
    RoleModule,
    QuestionModule,
    CmsRoutingModule,
    MenuModule
  ],
  exports: [CmsComponent]
})
export class CmsModule { }
