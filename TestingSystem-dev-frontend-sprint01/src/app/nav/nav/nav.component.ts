import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private roles: string[];
  private authority: string;
  info: any;
  constructor(private tokenStorage: TokenStorageService, private token: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_MANAGER') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  logout() {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['/']);
  }

}
