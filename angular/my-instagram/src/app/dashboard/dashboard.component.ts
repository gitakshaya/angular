import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {
  imageList: any[];
  filteredImageList:any[] = [];
    constructor(private dbService: DbService,private fb:FormBuilder) {
    }
   
    ngOnInit() {
      this.imageList = this.dbService.getConfig('imageList');
      console.log(this.imageList);
      this.imageList.forEach(element => {
        this.filteredImageList.push(element);
      });
    
    }
    onSearchChange(searchString : string){
      this.filteredImageList = [];
      console.log(searchString.length)
      if(searchString.length>0){
        this.filteredImageList =this.imageList.filter(
          image => image.name.includes(searchString));
      }
      else{
        this.imageList.forEach(element => {
          this.filteredImageList.push(element);
        });
      }
      console.log(this.filteredImageList);
    }
}
