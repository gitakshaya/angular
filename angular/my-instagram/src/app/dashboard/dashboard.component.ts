import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {
  imageList: any[];

    constructor(private dbService: DbService) {
    }
    ngOnInit() {
      this.imageList = this.dbService.getConfig('imageList');
      console.log(this.imageList);
    }
}
