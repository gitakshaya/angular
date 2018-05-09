import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatFormField, MatInput} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatButtonModule , MatCheckboxModule, MatCardModule, MatGridListModule,
     ]
})
export class CustomMaterialModuleModule { }
