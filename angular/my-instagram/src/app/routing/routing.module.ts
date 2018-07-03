import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path : '' , redirectTo: 'register', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent ,data: { state: 'dashboard' }},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class RoutingModule { }
