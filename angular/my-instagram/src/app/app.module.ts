import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

//  import { AngularFireModule } from 'angularfire2';
//  import { AngularFireDatabaseModule } from 'angularfire2/database';
//  import { AngularFireAuthModule } from 'angularfire2/auth';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModuleModule } from './custom-material-module/custom-material-module.module';
import { DbService } from './db.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { LoginService } from './login/login.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //  AngularFireModule.initializeApp(environment.firebase),
    //  AngularFireDatabaseModule,
    //  AngularFireAuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModuleModule,
    MatInputModule,
    RoutingModule,
  ],
  providers: [
    DbService,
    {provide: APP_INITIALIZER, useFactory: (config: DbService) => () => config.load(), deps: [DbService], multi: true }
    , LoginService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
