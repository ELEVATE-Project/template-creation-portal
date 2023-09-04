import { Component, OnInit } from '@angular/core';
import { InputDialogueBoxComponent } from '../../shared/components/dialogue-box/dialogue-box.component';
import { MatDialog } from '@angular/material/dialog';
import {  ActivatedRoute, Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';


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
  constructor (private dialog: MatDialog, private router: Router,private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
    this.type = params.get('type') ?? '';
    this.templateCode = parseInt(params.get('template_code') ?? '0')
    this.templateId = params.get('template_id') ?? '';

  });
    this.getTemplateDataFromLocal();
  }

  getTemplateDataFromLocal() {
    this.templateData = this.getLocalStorageData(`${localKeys.TEMPLATE_DATA}`+this.templateId);
    
  }

  getLocalStorageData(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
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
