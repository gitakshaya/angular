import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DbService } from '../db.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User [];
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private dbService: DbService) {
    this.users = dbService.getConfig('users');
  }
  public authenticate(userForm: FormGroup): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === userForm.value.name && this.users[i].password === userForm.value.password) {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn$.next(true);
        return true;
      }
    }
    return false;
  }
}
