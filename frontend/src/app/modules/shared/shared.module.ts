import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule
  ],
  declarations: [
    DynamicFormComponent,
    PopupDialogComponent
  ],
})
export class SharedModule { }
