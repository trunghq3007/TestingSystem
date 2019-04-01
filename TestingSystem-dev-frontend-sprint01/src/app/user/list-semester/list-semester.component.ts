import { UserService } from './../../service/userService.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Semester } from 'src/app/entity/Semester.interface';
import { User } from 'src/app/entity/User.interface';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-semester',
  templateUrl: './list-semester.component.html',
  styleUrls: ['./list-semester.component.css']
})
export class ListSemesterComponent implements OnInit {
  private roles: string[];
  private authority: string; // bien quyen
  info: any;
  semester: Semester;
  user: User;
  tests;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private tokenStorage: TokenStorageService,
     private token: TokenStorageService,
      private router: Router,
      private userService:UserService
  ) { }

  ngOnInit() {


  if (this.tokenStorage.getToken()) {
    this.roles = this.tokenStorage.getAuthorities(); // lay thong tin quyen
    this.roles.every(role => {
      if (role === 'ROLE_ADMIN') {
        this.authority = 'admin';
        return false;
      } else if (role === 'ROLE_MANAGER') {
        this.authority = 'pm';
        return false;
      }else{
        this.authority = 'user';
        return true;
      }

    });
  }
  this.info = {
    token: this.token.getToken(),
    username: this.token.getUsername(),
    authorities: this.token.getAuthorities(),
    /*** */ userId: this.token.getUserId()
  };
  console.log(this.roles);
  console.log(this.info.username);
    this.userService.getUserById(this.info.userId).subscribe(user => {
      this.user = user;
  });
    return this.userService.getListSemesterByUserId(this.info.userId).subscribe(semester => {
      this.semester = semester;
      console.log(semester)
  });




  }

}
