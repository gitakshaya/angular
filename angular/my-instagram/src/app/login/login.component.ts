import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.createForm();
  }
  ngOnInit() {

  }
  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required ],
      password : ['', Validators.required ],
    });
  }
  onSubmit() {
    if (this.loginService.authenticate(this.loginForm)) {
      this.router.navigate(['dashboard']);
    }

  }


}
