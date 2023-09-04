import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AppBarComponent } from '../../shared/components/app-bar/app-bar.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { TemplateService } from '../../shared/services/template/template.service';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { DataService } from '../../shared/data/data.service';
import { DraftTemplateWidgetComponent } from '../../shared/components/draft-template-widget/draft-template-widget.component';


interface DraftTemplateFields {
  name?: string;
  progress?: string;
  _id: string;
  template_code: Number,
  template_name: string,
  data: any

}
@Component({
  selector: 'app-template-homepage',
  templateUrl: './template-homepage.component.html',
  styleUrls: ['./template-homepage.component.scss']
})
export class TemplateHomePageComponent implements OnInit, AfterViewInit {
@ViewChild('appBar') appBar!: AppBarComponent
@ViewChildren('draftsTemplate') draftsComponentData!: QueryList<DraftTemplateWidgetComponent>
selected = 'Program Template';
draftsData!: DraftTemplateFields[];

constructor(private router: Router, private toastService: ToastService, private authService: AuthenticationService, private templateService: TemplateService, private dataService: DataService) { }


ngAfterViewInit(): void {
}

ngOnInit(): void {
 this.getAllDraftTemplates();
}


navigateToCreateTemplatePage() {
  if(this.selected != "None"){
  this.router.navigate(['/template/template-creation'], {queryParams:{type:this.selected}});
}else{
  this.toastService.showMessage('Please select a valid option');
}
}

logout(){
  this.authService.logoutAccount();
  this.router.navigate(['/auth/login']);
}

getAllDraftTemplates(){
  const reqParam = {
    url: API_CONSTANTS.ALL_DRAFT_TEMPLATE,
    headers:{
      "Content-Type":"application/json"
    },
  }
  this.dataService.get(reqParam).subscribe((response) => {
     this.draftsData = response.data
  })
}


}
