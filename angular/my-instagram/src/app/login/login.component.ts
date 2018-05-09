import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User [];
  loginForm: FormGroup;

  constructor(private dbService: DbService, private fb: FormBuilder,private router : Router) {
    this.users = dbService.getConfig('users');
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
    this.users.forEach(user => {
      if (user.username === this.loginForm.value.name
        && user.password === this.loginForm.value.password){
          this.router.navigate(['dashboard']);
        }
    });
  }


}
