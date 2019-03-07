import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menuName = '';
  menus: Observable<Menu[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.reloadData();
  }

  // deleteMenus() {
  //   this.menuService.deleteAll()
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log('ERROR: ' + error));
  // }

  deleteMenu(id: number) {
    const result = confirm('Do you want to delete the item?');
    if (result) {
      this.menuService.deleteMenu(id).subscribe(data => {
        console.log(data);
        this.reloadData();
      },
        error => console.log('ERROR: ' + error));

    }
  }

  searchMenu() {
    console.log((this.menuName === '') ? ('true') : this.menuName);
    this.menus = this.menuService.searchMenuByName(this.menuName);
    
    
  }





  reloadData() {
    this.menus = this.menuService.getMenusList();
  }


}
