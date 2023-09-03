import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppBarComponent } from '../../shared/components/app-bar/app-bar.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-template-homepage',
  templateUrl: './template-homepage.component.html',
  styleUrls: ['./template-homepage.component.scss']
})
export class TemplateHomePageComponent implements OnInit, AfterViewInit {
@ViewChild('appBar') appBar!: AppBarComponent
selected = 'Program Template';

constructor(private router: Router, private toastService: ToastService, private authService: AuthenticationService) { }


ngAfterViewInit(): void {
}

ngOnInit(): void {
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
}
