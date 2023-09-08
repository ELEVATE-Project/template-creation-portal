import { HttpClient, HttpParams } from '@angular/common/http';
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
        var templateId: string = result.data.template_id;
        await this.saveCurrentTemplateData(templateId, data);
        this.toastService.showMessage(result.message,'success')
          return result;
      })
    );
  }

  deleteTemplate(template_id: string) {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("template_id", template_id);
    
    const reqParam = {
      url: API_CONSTANTS.DELETE_TEMPLATE
    }

    return this.dataService.delete(reqParam,queryParams).subscribe((result: any) => {
      this.toastService.showMessage(result.message, 'success');
    })
  }

  updateFilename(template_id:string, filename: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("template_id", template_id);
    
    const reqParam = {
      url: API_CONSTANTS.UPDATE_TEMPLATE_FILENAME,
      data: {'filename': filename}
    }

    return this.dataService.put(reqParam,queryParams).subscribe((result: any) => {
      this.toastService.showMessage(result.message, 'success');
    })
  }

  async saveCurrentTemplateData(template_id: string, data:any) {
    await this.localStorage.saveLocalData(`${localKeys.TEMPLATE_DATA}`+template_id, JSON.stringify(data));
    return data;
  }
}