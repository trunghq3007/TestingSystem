import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-userdetal',
  templateUrl: './userdetal.component.html',
  styleUrls: ['./userdetal.component.css']
})
export class UserdetalComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
