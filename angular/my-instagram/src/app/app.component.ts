import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { LoginService } from './login/login.service';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  loading = true;
  areWrongCreds : boolean;

    constructor(private fb : FormBuilder,private dbService: DbService, private loginService: LoginService, private router: Router) {
      this.createForm();
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event)
      })
      if ('true' === localStorage.getItem('isLoggedIn'))  {
        this.isLoggedIn = true;
      }
        loginService.isLoggedIn$.asObservable().subscribe(data => {
            if (data && 'true' === localStorage.getItem('isLoggedIn'))  {
            this.isLoggedIn = true;
            this.router.navigate(['dashboard']);
          }
        });
      }
      navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
          this.loading = true
        }
        if (event instanceof NavigationEnd) {
          this.loading = false
        }
    
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
          this.loading = false
        }
        if (event instanceof NavigationError) {
          this.loading = false
        }
      }
    logout() {
      this.isLoggedIn = false;
      this.loginService.isLoggedIn$.next(false);
      localStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['register']);
    }
    createForm() {
      this.loginForm = this.fb.group({
        name: [null, Validators.required ],
        password : [null, Validators.required ],
      });
    }
    onSubmit() {
      if (this.loginService.authenticate(this.loginForm)) {
        this.router.navigate(['dashboard']);
      }
      else{
        this.areWrongCreds = true
      }
  
    }
}
