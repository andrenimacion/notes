import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ControlClassService {


  private port: any = environment.deploy_app_port;
  private apiURL: string = `https://alp-cloud.com:${this.port}/api`;

  constructor(private http: HttpClient) { }

  // apciasdocu = Obtiene datos de la empresa
  SaveClassNotes( model: any [] ) {
    return this.http.post( this.apiURL + '/class/save_classNotes/', model );
  }

  PutClassNotes( model: any [] ) {
    return this.http.put( this.apiURL + '/class/put_classNotes/', model );
  }

  GetClassNotes( order: string, token: string ) {
    return this.http.get( this.apiURL + '/class/Get_classNotes/' + order + '/' + token );
  }

  DelClassNotes( token: string, codcl: string ) {
    return this.http.get( this.apiURL + '/class/Del_classNotes/' + token + '/' + codcl );
  }

  tGenerate(cant: number) {

    let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789-";
    let token = "";
    
    for (let i=0; i<cant; i++) {
      token += caracteres.charAt(Math.floor(Math.random()*caracteres.length));   
    }

    return token;
    
  }

}
