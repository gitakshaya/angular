import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
    constructor(private dbService: DbService, private loginService: LoginService,private router:Router) {

        loginService.isLoggedIn$.asObservable().subscribe(data => {
            if (data && 'true' === localStorage.getItem('isLoggedIn'))  {
            this.isLoggedIn = true;
            this.router.navigate(['dashboard']);
          }
        });
      }
    logout() {
      this.isLoggedIn = false;
      this.loginService.isLoggedIn$.next(false);
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['login']);
    }
}
