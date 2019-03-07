import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuListDetailsComponent } from './menu-list-details/menu-list-details.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';

@NgModule({
  declarations: [MenuListComponent, AddMenuComponent, MenuListDetailsComponent, SearchMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule
  ],
  exports: [MenuListComponent, AddMenuComponent, MenuListDetailsComponent, SearchMenuComponent]
})
export class MenuModule { }
