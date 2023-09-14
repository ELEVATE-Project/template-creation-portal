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

@Component({
  selector: 'app-template-creation',
  templateUrl: './template-creation.component.html',
  styleUrls: ['./template-creation.component.scss']
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
  formsData:any = [];
  list: any = [];
  totalSheets: number = -1;
  currentStepIndex: number = 0;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) {
    
  }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=> this.type = params.get('type'));
    this.getTemplateDetails();
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
        this.totalSheets = sheetsData.length ;
        console.log(sheetsData)
        sheetsData.forEach((element: { columns: any; name: string, multipleRowsAllowed: boolean, required: boolean }) => {
          this.formsData.push({"controls": element.columns});
          this.list.push(element.name)
        });
      }
    );
  }

  proceedAndSubmit() {
    if (this.stepper.selectedIndex < this.totalSheets - 1) {
      this.stepper.next();
    }
    else {
     this.sheets.forEach((i) => {
      console.log(i.myForm);
     })
    }
  }

  backToHomePage(){
    this.router.navigate(['/template/template-homepage']);
  }

}
