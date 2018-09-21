import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, query, stagger, animate, keyframes } from '@angular/animations';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  areWrongCreds : boolean;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.createForm();
  }
  ngOnInit() {

  }
  createForm() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required ],
      fName: [null, Validators.required ],
      lName: [null, Validators.required ],
      password : [null, Validators.required ],
    });
  }
  onSubmit() {
    if (this.loginService.authenticate(this.registerForm)) {
      this.router.navigate(['dashboard']);
    }
    else{
      this.areWrongCreds = true
    }

  }

}
