import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicFormComponent } from '../../shared/components';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { DataService } from '../../shared/data/data.service';

@Component({
  selector: 'app-template-creation',
  templateUrl: './template-creation.component.html',
  styleUrls: ['./template-creation.component.scss']
})
export class TemplateCreationComponent implements OnInit {
  @ViewChild('programDetails') programDetails!:DynamicFormComponent;
  @ViewChild('resourceDetails') resourceDetails!:DynamicFormComponent;
  @ViewChild('programManagerDetails') programManagerDetails!:DynamicFormComponent;

  controls:any = [];

  formData :any= {controls: []}

  constructor(private router: Router, private dataService: DataService) {
    
  }
  ngOnInit(): void {
    this.getTemplateDetails();
  }

  getTemplateDetails() {
    const reqParam = {
      url: API_CONSTANTS.PROGRAM_TEMPLATE,
      headers:{
        "Content-Type":"application/json"
      },
    }
    return this.dataService.get(reqParam).subscribe(
      
    );
  }

  
  createTemplatePage(){
    this.router.navigate(['/template/template-creation']);
  }
}
