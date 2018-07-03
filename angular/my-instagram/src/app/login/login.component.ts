import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { trigger, state, style, transition, query, stagger, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  areWrongCreds : boolean;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.createForm();
  }
  ngOnInit() {

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
