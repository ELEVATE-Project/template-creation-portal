import { Component, OnInit, ViewChild, ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormComponent } from '../../shared/components';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { DataService } from '../../shared/data/data.service';
import { map } from 'rxjs';
import * as _ from "lodash";
import { HttpParams } from '@angular/common/http';
import { convertToTitleCase } from 'src/app/core/utils'; 
import { MatStepper } from '@angular/material/stepper';
import { XlsxServiceService } from 'src/app/core/services/xlsx-service/xlsx-service.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { InputDialogueBoxComponent } from '../../shared/components/dialogue-box/dialogue-box.component';
import { TemplateService } from '../../shared/services/template/template.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';

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
  type: any;
  sheet: String = 'sheet';
  isLinear = false;
  templateData: any = [];
  list: any = [];
  totalSheets: number = -1;
  currentStepIndex: number = 0;
  fileName: string = "Template Name";
  version!: string;
  templateCode!: Number;
  isMaximized = true;
  templateId!: string;
  draftData: any;
  isSaved: boolean = false;

  constructor(private router: Router, private dataService: DataService, private templateService: TemplateService, private route: ActivatedRoute, private excelService: XlsxServiceService, private localStorage: LocalStorageService, private dialog: MatDialog) {
    
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
    this.type = params.get('type')
    this.templateCode = parseInt(params.get('template_code') ?? '0')
    this.templateId = params.get('template_id') ?? '';

  });
    this.getTemplateDetails();

  }

  getTemplateDetails() {
    let queryParams = new HttpParams();
    if(this.type != null){
    queryParams = queryParams.append("type",this.type);
    }
    queryParams = queryParams.append("template_code", `${this.templateCode}`);
    const reqParam = {
      url: API_CONSTANTS.TEMPLATE_FORM,
      headers:{
        "Content-Type":"application/json"
      },
    }
    
     this.dataService.get(reqParam, queryParams).subscribe(
       (response:any) => {
        var sheetsData : any = response.data.data
        this.fileName = `${response.data.name}`
        this.templateCode = response.data.template_code
        this.version = response.version
        this.totalSheets = sheetsData.length
        this.getTemplateDataFromLocal();
        var mockTemplateData: any = [];
        sheetsData.forEach((element: { columns: any; name: string, multipleRowsAllowed: boolean, required: boolean }) => { 
          mockTemplateData.push({"name": element.name, "formsData": {"controls": element.columns}, "multipleRowsAllowed": element.multipleRowsAllowed, "required": element.required});
        });
        if(!_.isEmpty(this.draftData)){
          if(this.draftData.template_name){
          this.fileName = this.draftData.template_name ;}

        this.mergeDraftValues(mockTemplateData);
       }
        this.templateData = mockTemplateData
      
      }
    );



  }

  mergeDraftValues(templateData: any){
    templateData.forEach((templateSection: any) => {
      const draftSection = _.find(this.draftData.data, { name: templateSection.name });
      if (draftSection) {
        templateSection.formsData.controls.forEach((control: any) => {
          const draftControl = _.get(draftSection.rows[0],  control.name);
          if (draftControl) {
            control.value = draftControl;
          }
        });
      }
    });

    
  }

  getTemplateDataFromLocal() {
    if(this.templateId){
    this.draftData = this.getLocalStorageData(`${localKeys.TEMPLATE_DATA}`+this.templateId);
  }
  }

  getLocalStorageData(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  saveTemplate(filename?:string){
    var sheetsRowData: any = [];
    this.sheets.forEach((i, index) => {
      var sheet_name: string = this.templateData[index].name;
      var sheet_data: any = i.myForm.value;
      sheetsRowData.push({"name": sheet_name, "rows": [sheet_data]});
    });

    var data: any = {
      'template_name': this.fileName,
      'template_code': this.templateCode,
      'data': sheetsRowData,
      'filename': filename ?? this.fileName
    }


    this.templateService.saveTemplate(data).subscribe(async (pp: any) => {
      pp.then(
        (response:any) => {
          this.templateId = response.data.template_id
        }
      ).catch((e:any) => (console.error(e)))
      
    });
  }

  proceedAndSubmit() {
    if (this.stepper.selectedIndex < this.totalSheets - 1) {
      this.stepper.next();
    }
    else {
      if(this.draftData){}
      else{
     this.saveTemplate();
    }
    // this.router.navigate(['/template/template-preview'], {queryParams:{template_code: this.templateCode, template_id: this.templateId}})
     this.exportAsExcel();
    }
  }


  appendSheetsAndExport(filename?: string) {
    this.sheets.forEach((i, index) => {
      this.excelService.appendSheet([i.myForm.value], this.templateData[index].name)
     })
    
    this.excelService.saveExcelFile(filename ?? 'DynamicFormExport');
  }


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
        },
        okButtonCallBack: (filename?: string) => {
  
          if(filename){
            this.fileName = filename;
          }
          if(this.draftData){
            // this.updateTemplate();
          }else{
            this.saveTemplate(filename);
          }

          this.isSaved = true;
        }
      },
      width: '800px'
    });
    
  }


  exportAsExcel() {
    const dialogRef = this.dialog.open(InputDialogueBoxComponent, {
      data: {
        header: "Export the template",
        subHeader: "Enter filename",
        required: true,
        buttonText: {
          ok: 'OK',
          cancel: 'CANCEL'
        },
        okButtonCallBack: (filename?:string) => {
          if(filename){
          this.fileName = filename;
          }

          this.appendSheetsAndExport(filename);
        }
      },
      width: '800px'
    });
  }

  backToHomePage() {
    if(this.isSaved){
      this.router.navigate(['/template/template-homepage']);
    }else{
    const dialogRef = this.dialog.open(InputDialogueBoxComponent, {
      data: {
        header: "Save Your Work-in-Progress",
        subHeader: "Please Name the template to Identify it",
        required: false,
        buttonText: {
          ok: 'OK',
          cancel: 'CANCEL'
        },
        okButtonCallBack: (filename?: string) => {
          if(filename){
            this.fileName = filename;
          }
          if(this.draftData){
          // this.updateTemplate();
        }else{
          this.saveTemplate(filename);
        }
          this.router.navigate(['/template/template-homepage']);
        },
        cancelCallback: () => {
          //nothing
        }
      },
      width: '800px'
    });
    }
  }

  
  toggleMaximize() {
    this.isMaximized =  !this.isMaximized;
  }

}
