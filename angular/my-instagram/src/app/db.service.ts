import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private config: Object = null;

  constructor(private http: HttpClient) {
  }

  public getConfig(key: any) {
    return this.config[key];
  }


  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/db.json').subscribe((responseData) => {
        this.config = responseData;
        resolve(true);
      });
    });
  }
}
