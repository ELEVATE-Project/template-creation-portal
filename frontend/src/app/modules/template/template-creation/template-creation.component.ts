import { Component, OnInit, ViewChild, ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormComponent } from '../../shared/components';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { DataService } from '../../shared/data/data.service';
import { map } from 'rxjs';
import * as _ from "lodash-es";
import { HttpParams } from '@angular/common/http';
import { convertToTitleCase } from 'src/app/core/utils'; 
import { MatStepper } from '@angular/material/stepper';
import { XlsxServiceService } from 'src/app/core/services/xlsx-service/xlsx-service.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogueBoxComponent } from '../../shared/components/dialogue-box/dialogue-box.component';

@Component({
  selector: 'app-template-creation',
  templateUrl: './template-creation.component.html',
  styleUrls: ['./template-creation.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('shrunk', style({
        height: '60px'
      })),
      state('maximized', style({})),
      transition('shrunk <=> maximized', animate('300ms ease-in')),
    ]),
  ],
})
export class TemplateCreationComponent implements OnInit, AfterViewInit {
convertToTitleCase(arg0: any) {
  return convertToTitleCase(arg0);
}
  @ViewChildren('sheets') sheets!: QueryList<DynamicFormComponent>;
  @ViewChild('stepper') stepper!: MatStepper;
  // @ViewChild('resourceDetails') resourceDetails!:DynamicFormComponent;
  // @ViewChild('programManagerDetails') programManagerDetails!:DynamicFormComponent;
  type: any;
  sheet: String = 'sheet';

  templateData: any = [];
  list: any = [];
  totalSheets: number = -1;
  currentStepIndex: number = 0;
  fileName: string = "Template Name";
  version!: string;
  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private excelService: XlsxServiceService, private localStorage: LocalStorageService, private dialog: MatDialog) {
    
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=> this.type = params.get('type'));
    this.getTemplateDetails();

    // const retrievedData = JSON.parse(localStorage.getItem('formData'));

  }

  getTemplateDetails() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("type",this.type);
    const reqParam = {
      url: API_CONSTANTS.TEMPLATE_FORM,
      headers:{
        "Content-Type":"application/json"
      },
    }
    
    this.dataService.get(reqParam, queryParams).subscribe(
      (response) => {
        var sheetsData : any = response.data.data
        this.fileName = `${response.data.name}`
        this.version = response.version
        this.totalSheets = sheetsData.length
        sheetsData.forEach((element: { columns: any; name: string, multipleRowsAllowed: boolean, required: boolean }) => { 
          this.templateData.push({"name": element.name, "formsData": {"controls": element.columns}, "multipleRowsAllowed": element.multipleRowsAllowed, "required": element.required});
        });
      }
    );
  }

  proceedAndSubmit() {
    if (this.stepper.selectedIndex < this.totalSheets - 1) {
    //   this.excelService.appendSheet([this.sheets.get(0)?.myForm.value], "Name")
    // this.excelService.saveExcelFile('DynamicFormExport');
      this.stepper.next();
    }
    else {
      this.appendSheetsAndExport();
    }
  }


  appendSheetsAndExport() {
    this.sheets.forEach((i, index) => {
      
      // localStorage.setItem('formData', JSON.stringify(i.myForm));
      this.excelService.appendSheet([i.myForm.value], this.templateData[index].name)
     })
    
    this.excelService.saveExcelFile('DynamicFormExport');
  }

  isMaximized = true;

  addRow(name:string){

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

    dialogRef.afterClosed().subscribe(
      (chip) => {
        this.router.navigate(['/template/template-homepage']);
      })
  }
  
  toggleMaximize() {
    this.isMaximized =  !this.isMaximized;
  }

}
