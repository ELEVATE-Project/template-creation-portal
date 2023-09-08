import { Component, OnInit } from '@angular/core';
import { InputDialogueBoxComponent } from '../../shared/components/dialogue-box/dialogue-box.component';
import { MatDialog } from '@angular/material/dialog';
import {  ActivatedRoute, Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import * as XLSX from 'xlsx';
import * as _ from "lodash";

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnInit {

  type!: string;
  templateCode!: Number;
  templateId!: string
  dataSource: any;
  templateData: any;
  sheetNames: string[] = [];

  selectedSheetName: string = '';
  selectedSheetData: any[] = [];
  private workbook: XLSX.WorkBook;

  constructor (private dialog: MatDialog, private router: Router,private route: ActivatedRoute) {
    this.workbook = XLSX.utils.book_new();
  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
    this.type = params.get('type') ?? '';
    this.templateCode = parseInt(params.get('template_code') ?? '0')
    this.templateId = params.get('template_id') ?? '';

  });
    this.getTemplateDataFromLocal();
  }


  

  appendSheet(data: any, sheetName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, worksheet, sheetName);
  }

  getTemplateDataFromLocal() {
    if(this.templateId && this.templateId !==''){
      this.templateData = this.getLocalStorageData(`${localKeys.TEMPLATE_DATA}`+this.templateId);
      console.log(this.templateData);
      this.templateData.data.forEach((value: any) => {
        this.appendSheet([value.rows],value.name);
      })
      this.sheetNames = this.workbook.SheetNames;
      console.log(this.sheetNames);
      console.log(this.workbook.Sheets)
    // Initialize with the first sheet (you can choose a default)
      // if (this.sheetNames.length > 0) {
      //   this.selectedSheetName = this.sheetNames[0];
      // this.selectedSheetData = XLSX.utils.sheet_to_json(
      //   this.workbook.Sheets[this.selectedSheetName],
      //   { header: 1 }
      // );
    // }
  }
    
  }

  getLocalStorageData(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  onSheetChange(event: any) {
    const selectedSheetName = event.target.value;
    this.selectedSheetName = selectedSheetName;
    const indexWithNameB = _.findIndex(this.templateData.data, { name: selectedSheetName });
    if(indexWithNameB !== -1){
    this.selectedSheetData = this.templateData.data[indexWithNameB].rows;
  }
  }

  saveAsDraft() {
    const dialogRef = this.dialog.open(InputDialogueBoxComponent, {
      data: {
        header: "Save Your Work-in-Progress",
        subHeader: "Please Name the template to Identify it",
        required: true,
        buttonText: {
          ok: 'OK',
          cancel: 'CANCEL'
        }
      },
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(
      (chip) => {
        if (chip && chip!=='') {
         console.log(chip);
        }
      })
  }

  backToHomePage() {
    const dialogRef = this.dialog.open(InputDialogueBoxComponent, {
      data: {
        header: "Save Your Work-in-Progress",
        subHeader: "Please Name the template to Identify it",
        required: false,
        buttonText: {
          ok: 'OK',
          cancel: 'CANCEL'
        }
      },
      width: '800px'
    });
  }

}
