import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DesNotesControlService {

  private port: any = environment.deploy_app_port;
  private apiURL: string = `https://alp-cloud.com:${this.port}/api`;

  constructor(private http: HttpClient) { }

  // apciasdocu = Obtiene datos de la empresa
  SaveNotes( model: any [] ) {
    return this.http.post( this.apiURL + '/desNotes/save_desNotes/', model );
  }

  PutNotes( model: any [], id: number ) {
    return this.http.put( this.apiURL + '/desNotes/putDesnotes/' + id, model );
  }

  GetNotes( order: string, token: string, CodClass: string ) {
    return this.http.get( this.apiURL + '/desNotes/Get_desNotes/' + order + '/' + token + '/' + CodClass );
  }
  
  DelNotes( id: number ) {
    return this.http.get( this.apiURL + '/desNotes/Del_desNotes/' + id );
  }

  
}
