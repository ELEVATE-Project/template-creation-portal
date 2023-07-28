import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { DynamicFormComponent } from '../../shared/components';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm!: DynamicFormComponent;
  controls: any = {
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
          pattern: '/^[a-z ,.\'-]+$/i'
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
          pattern: '/^[a-z ,.\'-]+$/i'
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


  constructor(private router: Router, private authService: AuthenticationService, private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    
   }

  onRegister() {
    let fromJson = this.registerForm.myForm.value;
    if(this.registerForm.myForm.valid){
      this.authService.signup(fromJson)
      .subscribe((resp: any) => {
        if (resp?.status === 200) {
          this.toastr.success(resp?.response, 'Success')
          this.router.navigate(['/auth/login'])
        }
      }, (error: any) => {
        this.toastr.error(error, 'Error')
      })
    }
  }
}
