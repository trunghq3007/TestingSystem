import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/entity/Test.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/userService.service';
import { mergeMap } from 'rxjs/operators';
import { User } from 'src/app/entity/User.interface';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
   tests;
  semester;
  user: User;
  private roles: string[];
  private authority: string; // bien quyen
  info: any;
  semesterId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService,
    private tokenStorage: TokenStorageService
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
        } else {
          this.authority = 'user';
          return true;
        }

      });
    }
    this.info = {
      tokenStorage: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities(),
      userId: this.tokenStorage.getUserId()
    };

    this.userService.getUserById(this.info.userId).subscribe(user => {
      this.user = user;
    });
  //   this.activatedRoute.paramMap.subscribe(params => {
  //     this.semesterId = params.get('id');
  //     console.log(this.semesterId)

  //    this.http.get(`http://localhost:8080/test/users/${this.info.userId}/semesters/${this.semesterId}/tests/`).subscribe(
  //       ob => {
  //         this.tests = ob;
  //        console.log(this.tests)
  //        console.log(this.info.userId)
  //        console.log(this.semesterId)

  //          })

  // })
  this.activatedRoute.paramMap.subscribe(params => {
    this.semesterId = params.get('id');
    console.log(this.semesterId)

   this.http.get(`http://localhost:8080/test/users/${this.info.userId}/semesters/${this.semesterId}/tests/`).subscribe(
      ob => {
        this.tests = ob;
       console.log(this.tests)
       console.log(this.info.userId)
       console.log(this.semesterId)

         })

})

}

}
