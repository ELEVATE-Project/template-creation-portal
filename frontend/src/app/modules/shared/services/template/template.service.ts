import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../data/data.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { map } from 'rxjs';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private http: HttpClient, private dataService: DataService, private toastService: ToastService, private localStorage: LocalStorageService) { }


   saveTemplate(data: any) {

    const reqParam = {
      url: API_CONSTANTS.SAVE_TEMPLATE,
      data: data
    }
    return this.dataService.post(reqParam).pipe(
      map(async (result:any) => {
        await this.saveCurrentTemplateData(data);
        this.toastService.showMessage(result.message,'success')
          return result;
      })
    );
    
  }

  async saveCurrentTemplateData(data:any) {
    await this.localStorage.saveLocalData(localKeys.TEMPLATE_DATA, JSON.stringify(data));
    return data;
  }
}