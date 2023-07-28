import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {DataService} from "../../shared/data/data.service";
import {ToastrService} from "ngx-toastr";
import { DynamicFormComponent } from '../../shared/components/dynamic-form/dynamic-form.component';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: DynamicFormComponent;
  rememberMe:boolean = false;
  controls:any = {
    controls: [
      {
        name: 'email',
        labels: 'Email Id',
        value: '',
        type: 'email',
        placeHolder: 'abc@example.com',
        errorMessage: 'Please enter registered email id',
        validators: {
          required: true,
          pattern: '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'
        },
      },
      {
        name: 'password',
        label: 'Password',
        value: '',
        type: 'password',
        placeHolder: 'Enter password',
        errorMessage: 'Please enter your registered password',
        validators: {
          required: true,
          minLength: 8,
          pattern: "^[a-zA-Z0-9!@#%$&~*^()\\-`.+,/\"]*$"
        },
      },
    ]
  };
  
  formData :any= {controls: []}
  constructor(private router: Router,
              private authService: AuthenticationService,private toastr: ToastrService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    var userLoggedIn : boolean = this.authService.isUserLoggedIn();
    if(userLoggedIn){
      this.router.navigate(['/template/template-homepage'])
    }else{
      this.getSavedDetails();
    }

  }

  async getSavedDetails() {
    const savedDetails = await this.localStorage.getLocalData(localKeys.REMEMBER_ME);
    let details: any = null;
    if(savedDetails){
      details = JSON.parse(atob(savedDetails));
    }

    for(const control of this.controls.controls){
      control["value"] = details ? details[details.type]: '';
      
    }

    this.formData.controls  = this.controls.controls;

  }


  onSubmit() {
    this.authService.login(this.loginForm.myForm.value)
    
    .subscribe((resp: any) =>{
      this.router.navigate(['/template/template-homepage'])
    })
  }

  goToRegister() {
    this.router.navigate(['/auth/register'])


  }

}
