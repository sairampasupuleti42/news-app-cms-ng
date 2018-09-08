import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { conf } from '../helpers/common';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  headers: any;

  base_url: string = "";
  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders().set('NG-AUTH', '12NQ1A0542')
    }
  }
  getData(uri: string) {
    return this.http.get(conf.api + uri, this.headers);
  }
 
}
