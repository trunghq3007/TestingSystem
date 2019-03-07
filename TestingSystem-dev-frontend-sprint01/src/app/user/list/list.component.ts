import { Component, OnInit, Input, ViewChild } from '@angular/core';
//import { User } from '../user.model';
import { mergeMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from 'src/entity/User';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { PopupDeleteComponent } from './popup-delete/popup-delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild(PopupDeleteComponent) child : PopupDeleteComponent;
  
  users: User[] = [];
  keyword: string;
  fullname: string;
  email: string;
  status: number;
  userFrom: FormGroup;
  displayedColumns = ['stt', 'fullname', 'email', 'mobile','status', 'actions'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private router: Router) { }


  ngOnInit() {
    this.userService.getUsersList()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Số mục trên mỗi trang:';
      });
  }

  deleteUser(id: number) {
  //  const checked = confirm('Do you want to delete this item');
  //   if (checked) {
      this.userService.deleteUser(id).pipe(
        mergeMap(() => this.userService.getUsersList())
      ).subscribe((users) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Số mục trên mỗi trang:';
        this.router.navigateByUrl('/user/list');
      });
   // }
  }

  searchUser(){
    if(this.keyword === ''){
      this.userService.getUsersList()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Số mục trên mỗi trang:'; 
      });
    }else {
      this.userService.searchUser(this.keyword).subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Số mục trên mỗi trang:';
      });
    }
    
  }

  sendId(id:number){
    console.log(id);
    this.child.id = id;
  }

}
