import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ trigger('routerTransition', [
    transition('* <=> *', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      /* 2 */ group([  // block executes in parallel
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ])
]
  
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
