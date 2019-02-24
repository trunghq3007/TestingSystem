import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [CmsComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    HeaderModule,
    FooterModule,
    NavModule
  ],
  exports: [CmsComponent]
})
export class CmsModule { }
