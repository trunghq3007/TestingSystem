import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HeaderModule } from './header/header.module';
import { NavModule } from './nav/nav.module';
import { FooterModule } from './footer/footer.module';
import { CategoryQuestionModule } from './category-question/category-question.module';
import { QuestionModule } from './question/question.module';
import { SemesterExamModule } from './semester-exam/semester-exam.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTestingModule } from './user-testing/user-testing.module';
import { UnregisterTestingComponent } from './unregister-testing/unregister-testing.component';
import { UnregisterTestingSemesterComponent } from './unregister-testing-semester/unregister-testing-semester.component';
import { UserTestingSemesterComponent } from './user-testing-semester/user-testing-semester.component';
import { UserTestingSemesterModule } from './user-testing-semester/user-testing-semester.module';
@NgModule({
   declarations: [
      AppComponent,
      UnregisterTestingComponent,
      UnregisterTestingSemesterComponent,
      UserTestingSemesterComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule, MatCheckboxModule,
      NavModule,
      HeaderModule,
      FooterModule,
      QuestionModule,
      CategoryQuestionModule,
      AppRoutingModule,
      SemesterExamModule,
      NgbModule,
      UserTestingModule,
      UserTestingSemesterModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
