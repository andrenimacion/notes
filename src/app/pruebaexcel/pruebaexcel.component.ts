import { Component, OnInit } from '@angular/core';
import { XlsxControllerService } from '../services/xlsx-controller.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-pruebaexcel',
  templateUrl: './pruebaexcel.component.html',
  styleUrls: ['./pruebaexcel.component.scss']
})
export class PruebaexcelComponent implements OnInit {

  constructor(private getxlsx: XlsxControllerService) { }

  ngOnInit(): void {

    this.getEntity();

  }
  
  
  public _entity: string = 'dp03amov';
  public dataDBGen: any = [];
  //public arrEntity: any = [];
  getEntity() {
    this.getxlsx.getDp03amov(2000, 'dp03amov').subscribe( entity => {
      this.dataDBGen = entity;
      console.log(this.dataDBGen);
    })
  }


  exportXLSX(): void {
      /* generate a worksheet */
      var ws:XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataDBGen);
      
      /* add to workbook */
      var wb:XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "alex_prueba");
      
      /* write workbook and force a download */
      XLSX.writeFile(wb, "alex_prueba.xlsx");

  }

}
