import { Component, OnInit, ViewChild, ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormComponent } from '../../shared/components';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { DataService } from '../../shared/data/data.service';
import { map } from 'rxjs';
import * as _ from "lodash-es";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-template-creation',
  templateUrl: './template-creation.component.html',
  styleUrls: ['./template-creation.component.scss']
})
export class TemplateCreationComponent implements OnInit, AfterViewInit {
  @ViewChildren('sheets') sheets!: QueryList<DynamicFormComponent>;
  // @ViewChild('resourceDetails') resourceDetails!:DynamicFormComponent;
  // @ViewChild('programManagerDetails') programManagerDetails!:DynamicFormComponent;
  type: any;
  sheet: String = 'sheet';
  formsData:any = [];
  currentSelection: number = 0;
  totalSheets: number = -1;
  buttonActionText: string = 'Next';

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
        var dd : any = response.data
        this.totalSheets = dd.length;

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
    this.currentSelection = (this.currentSelection + 1) % this.totalSheets;
  }
  backToHomePage(){
    this.router.navigate(['/template/template-homepage']);
  }
}
