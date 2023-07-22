import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private dataService: DataService) { }

  login(body: any) {
    console.log("running");
    const reqParam = {
      url: 'users/login',
      data: {
          email_address: body.email_address,
          password: body.password
      }
    }
    return this.dataService.post(reqParam);
  }

  signup(body: any) {
    const reqParam = {
      url: 'signup',
      headers:{
        "admin-token":"somethingRandom",
        "Content-Type":"application/json"
      },
      data: {
          first_name: body.first_name,
          last_name: body.last_name,
          email_address: body.email_address,
          password: body.password
      }
    }
    return this.dataService.post(reqParam);
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true
    }
    return false;
  }
logoutAccount() {
  localStorage.clear();
  }


}
