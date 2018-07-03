import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule,
   MatFormField, MatInput, MatToolbarModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MatButtonModule , MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule,MatIconModule
     ]
})
export class CustomMaterialModuleModule { }
