import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/auth/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicFormComponent } from '../../shared/components';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm!: DynamicFormComponent;
  controls:any = {
    controls: [
      {
        name: 'first_name',
        label: 'First Name',
        value: '',
        type: 'text',
        placeHolder: 'First Name',
        errorMessage:'Please enter your first name',
        validators: {
          required: true,
          pattern: '[a-zA-Z\s]+$'
        },
      },
      {
        name: 'last_name',
        label: 'Last Name',
        value: '',
        type: 'text',
        placeHolder: 'Last Name',
        errorMessage:'Please enter last name',
        validators: {
          required: true,
          pattern: '[a-zA-Z\s]+$'
        },
      },
      {
        name: 'email',
        label: 'Email Id',
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

  formData: any = {controls: []}


  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService, private localStorage: LocalStorageService) { 
    
  }



  onSubmit() {
    let fromJson = this.registerForm.myForm.value;
    if(this.registerForm.myForm.valid){
      this.authService.signup(fromJson).subscribe((resp: any) => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

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
}
