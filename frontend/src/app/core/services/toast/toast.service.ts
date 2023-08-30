import { Injectable } from '@angular/core';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import * as _ from "lodash-es";
import { ToastMessageComponent } from 'src/app/modules/shared/components/toast-message/toast-message.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  durationInSeconds = 2;
  constructor(private _snackBar: MatSnackBar) { }

  showMessage(msg: any, cssclass: any = "success", options: any = {
    hp : 'center',
    vp : 'top', 
    duration : 2
  }) {
    let texts: any;
    this._snackBar.open((_.isEmpty(texts))?msg:texts[msg], '', {
      horizontalPosition: options.hp,
      verticalPosition: options.vp,
      duration: options.duration * 1000,
      panelClass: cssclass
    });
  }
  showIconMessage(toastConfig: any,cssClass: any = 'success'){
    this._snackBar.openFromComponent(ToastMessageComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: cssClass,
      data: toastConfig
    })
  }
}
