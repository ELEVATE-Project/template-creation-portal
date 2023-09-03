import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class XlsxServiceService {

  private workbook: XLSX.WorkBook;
  constructor() {
    this.workbook = XLSX.utils.book_new();
  }

  appendSheet(data: any, sheetName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, worksheet, sheetName);
  }

  saveExcelFile(filename: string): void {
    const excelBuffer: any = XLSX.write(this.workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    FileSaver.saveAs(excelBlob, `${filename}.xlsx`);
  }

}
