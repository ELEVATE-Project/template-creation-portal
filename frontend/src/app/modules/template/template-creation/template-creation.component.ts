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
    // queryParams = queryParams.append("type",this.type);
    const reqParam = {
      url: API_CONSTANTS.PROGRAM_TEMPLATE,
      headers:{
        "Content-Type":"application/json"
      },
    }
    
    this.dataService.get(reqParam, queryParams).subscribe(
      (response) => {
        var dd : any = response.data.data
        this.list = response.data.sheet_list
        this.totalSheets = dd.length;
        console.log(this.list);
        this.formsData = [
          { 'controls' : dd[0]['program_details']},
          { 'controls': dd[1]['resource_details']},
          {'controls': dd[2]['program_manager_details']}
          
        ]
      
        console.log(this.formsData);
        console.log(this.sheets)
        

      }
    );
  }

  proceedAndSubmit() {
    if (this.currentStepIndex < this.formsData.length - 1) {
      this.stepper.next();
    }
    else {

    }
  }

  backToHomePage(){
    this.router.navigate(['/template/template-homepage']);
  }

}
