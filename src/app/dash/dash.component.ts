import { Component, OnInit } from '@angular/core';
import { DesNotesControlService } from '../services/des-notes-control.service';
import { ControlClassService } from '../services/control-class.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  public _n_class: string = '';
  public _d_notes: string = '';

  public _nombre: string = '';
  public _descip: string = '';
  public _cod: any;
  public _color: string = '';

  public _text_dis: boolean = true;

  public order: string = 'asc';

  public _name_class_selected: string = '';

  constructor( private controlClass: ControlClassService, private controlNotes: DesNotesControlService ) { }

  ngOnInit(): void {
    const x: any = localStorage.getItem('order');
    this.getClass(x);

   }
/** CONTROL DE CLASES CRUD */
//#region

  public arrClass: any = [];
   public count = 0;
  sclas(nclas: string, dclas: string, color: string) {

    this.count ++

    localStorage.setItem('count-class', Number(Number(this.count) + Number(localStorage.getItem('count-class'))).toString().padStart(4, '0'))
    const m: any = localStorage.getItem('count-class'); 

    this._cod = m;
    this.arrClass = {
      n_class:    nclas,
      d_class:    dclas,
      color:      color,
      token_user: sessionStorage.getItem('TOKEN'),
      cod_class:  this._cod
    }   
    console.log('====SAVE====');
    console.log(this.arrClass);

    

    this.controlClass.SaveClassNotes(this.arrClass).subscribe( sc => {
      console.log(sc);
      const x: any = localStorage.getItem('order');
      this.getClass(x)
    }, () => [
      console.warn('Error en save')
    ])

  }

  upclass(nclas: string, dclas: string, color: string,  cod_class: string) {
    
    this.arrClass = {
      n_class:    nclas,
      d_class:    dclas,
      color:      color,
      token_user: sessionStorage.getItem('TOKEN'),
      cod_class:  cod_class
    }

    this.controlClass.PutClassNotes(this.arrClass).subscribe( uc => {
      console.log(uc);
      const x: any = localStorage.getItem('order');
      this.getClass(x);
      console.log('====UPDATE====');
      console.log(this.arrClass);

    }, () => [
      console.warn('Error en el update')
    ])

  }

  public arrgnotes: any = [];
  getClass(order: string) {

    localStorage.setItem('order', this.order);
    let xToken: any = sessionStorage.getItem('TOKEN');

    this.controlClass.GetClassNotes(order, xToken).subscribe( gc => {      
      this.arrgnotes = gc;
      console.log(this.arrgnotes);
    })
    
  }

  dClass(cclas: string) {
    let xToken: any = sessionStorage.getItem('TOKEN');
    this.controlClass.DelClassNotes(xToken, cclas).subscribe( dc => {
      console.log('DELETED OK');
      this.getClass('asc');
    })
  }

//#endregion


/**CONTROL DE NOTAS */
//#region 

public arrNotesS: any = [];

snotes(nnotes: string, dnotes: string, observ: string,) {

  this.arrNotesS = {
		finit:       new Date(), 
		ffin:        new Date(),
		freal:       new Date(),
		time:        0.00,
		n_notes:     nnotes,
		d_notes:     dnotes,
		observacion: observ,
		token_user:  sessionStorage.getItem('TOKEN'),
		cod_class:   localStorage.getItem('cod_class'),
		campoA:      '',
		campoB:      0.00,
		cantidad:    0.00
  }

  this.controlNotes.SaveNotes(this.arrNotesS).subscribe( sn => {
    console.log('=====SAVE NOTES=====');
    console.log(sn);
  })

}

//#endregion
getUnitClassNotes(a: string, b: string) {
  console.log(a + b);
}

controlTextArea(a: string) {

  this._name_class_selected = a;
  
  if(a == undefined || a== '') {
    this._text_dis = true;
  }
  else {
    this._text_dis = false;
  }

}

}
