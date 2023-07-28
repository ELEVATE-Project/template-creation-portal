import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppBarComponent } from '../../shared/components/app-bar/app-bar.component';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-template-homepage',
  templateUrl: './template-homepage.component.html',
  styleUrls: ['./template-homepage.component.scss']
})
export class TemplateHomePageComponent implements OnInit, AfterViewInit {
@ViewChild('appBar') appBar!: AppBarComponent
selected = 'programTemplate';

constructor(private router: Router, private toastService: ToastService) {
  
}


ngAfterViewInit(): void {
  console.log('AA')
}
ngOnInit(): void {
  console.log('AA')
}
createTemplatePage() {
  if(this.selected == 'programTemplate'){
  this.router.navigate(['/template/template-creation']);
}else{
  this.toastService.showMessage('Please Select Program Template Only');
}

}
}
