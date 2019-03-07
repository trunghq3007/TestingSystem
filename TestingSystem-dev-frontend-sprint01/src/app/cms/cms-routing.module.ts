import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CmsComponent } from './cms.component';
import { ListExamComponent } from '../exam/list-exam/list-exam.component';
import { ListQuestionComponent } from '../question/list-question/list-question.component';
import { GroupUserComponent } from '../group/group-user/group-user.component';
import { AddGroupUserComponent } from '../group/add-group-user/add-group-user.component';
import { GroupUserDetailComponent } from '../group/group-user-detail/group-user-detail.component';
import { MenuListComponent } from '../menu/menu-list/menu-list.component';
import { RoleComponent } from '../role/role.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { DetailExamComponent } from '../exam/detail-exam/detail-exam.component';
import { CreateExamComponent } from '../exam/create-exam/create-exam.component';
import { UpdateExamComponent } from '../exam/update-exam/update-exam.component';
import { UpdateCommonComponent } from '../exam/update-common/update-common.component';
import { UpdateContentComponent } from '../exam/update-content/update-content.component';

const routes: Routes = [
  {
    path: 'cms',
    component: CmsComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      {
        path: 'exam',
        component: ListExamComponent,
        pathMatch: 'full'
      },
      {
        path: 'exam/create',
        component: CreateExamComponent,
      },
      {
        path: 'exam/:id',
        component: DetailExamComponent
      },
      {
        path: 'exam/:id/update',
        component: UpdateExamComponent
      },
      {
        path: 'exam/:id/update/update-common',
        component: UpdateCommonComponent
      },
      {
        path: 'exam/:id/update/update-content',
        component: UpdateContentComponent
      },
      {
        path: 'question',
        component: ListQuestionComponent,
        pathMatch: 'full'
      },
      // {
      //   path: 'group',
      //   loadChildren: './login/login.module#LoginModule',
      //   pathMatch: 'full'
      // }

      {
        path: 'group',
        component: GroupUserComponent
      },
      {
        path: 'menu',
        component: MenuListComponent,
        pathMatch: 'full'
      },
      {
        path: 'role',
        component: RoleComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
