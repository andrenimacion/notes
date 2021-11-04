import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XlsxControllerService {

  // private port: any = environment.deploy_app_port;
  //private apiURL: string = `https://alp-cloud.com:${this.port}/api`;
  
  constructor(private http: HttpClient) { }

  getDp03amov(top: number, table: string) {
    return this.http.get('http://localhost:5000/api/dp08acal/dp03amov/' + top + '/' + table);
  }



}
