import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data/data.service';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import * as _ from "lodash-es";
import { map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from 'src/app/core/services/toast/toast.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private dataService: DataService, private toastService: ToastService, private localStorage: LocalStorageService) { }

  login(body: any) {
    const reqParam = {
      url: API_CONSTANTS.ACCOUNT_LOGIN,
      data: {
          email: body.email,
          password: body.password
      }
    }
    return this.dataService.post(reqParam).pipe(
      map(async (result:any) => {
        this.toastService.showMessage(result.message,'success')
          return await this.setUserInLocal(result)
      })
    );
  }

  async setUserInLocal(data:any) {
    let token = _.pick(data.data, ['access_token']);
    await this.localStorage.saveLocalData(localKeys.TOKEN, JSON.stringify(token));
    await this.localStorage.saveLocalData(localKeys.USER_ID, data.data.user_id);
    return data;
    
  }
  signup(body: any) {
    const reqParam = {
      url: API_CONSTANTS.CREATE_ACCOUNT,
      headers:{
        "admin-token":"b4d0165600a599110c4667d8db88ecc2",
        "Content-Type":"application/json"
      },
      data: {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          password: body.password
      }
    }
    return this.dataService.post(reqParam).pipe(
      map(async (result:any) => {
        this.toastService.showMessage(result.message,'success');
        return await this.setUserInLocal(result);
      })
    );
  }

   isUserLoggedIn(): boolean{
    if(localStorage.getItem(localKeys.TOKEN)){
      return true;
    }
    return false;
  }

  logoutAccount() {
  localStorage.clear();
  }


}
