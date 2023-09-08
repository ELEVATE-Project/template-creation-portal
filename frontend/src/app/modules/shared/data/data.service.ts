import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { AuthenticationService } from '../services/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private toastService: ToastService, private injector: Injector) {
  }

  post(requestParam: any) {
    return this.http.post(this.baseUrl + requestParam.url, requestParam.data,{
      headers:requestParam?.headers
    }).pipe( catchError(this.handleError.bind(this)));
  }

  get(requestParam: any, params?:HttpParams): Observable<any> {
    
    return this.http.get(this.baseUrl + requestParam.url,{params:params,headers:requestParam.headers}).pipe(catchError(this.handleError.bind(this)));
  }

  delete(requestParam: any, params?:HttpParams): Observable<any> {
    return this.http.delete(this.baseUrl + requestParam.url, {params:params,headers:requestParam.headers}).pipe(catchError(this.handleError.bind(this)));
  }

  put(requestParam: any, params?:HttpParams): Observable<any> {
    return this.http.put(this.baseUrl + requestParam.url,requestParam.data, {params:params,headers:requestParam.headers}).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here

    this.errorToast(error.error.message);
    switch (error.status) {
      case 401:
        this.injector.get(AuthenticationService).logoutAccount();
        return throwError(() => console.log(error));

      default:
        return throwError(() => console.log(error));
    }
   
  }

  errorToast(message:any) {
    this.toastService.showMessage(message,'warning')
  }
}
