import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { PopupDialogComponent } from './components/popup-dialog/popup-dialog.component';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastMessageComponent } from './components/toast-message/toast-message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DraftTemplateWidgetComponent } from './components/draft-template-widget/draft-template-widget.component';
import { InputChipComponent } from './components/input-chip/input-chip.component';
import { InputDialogueBoxComponent } from './components/dialogue-box/dialogue-box.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  declarations: [
    DynamicFormComponent,
    PopupDialogComponent,
    ToastMessageComponent,
    AppBarComponent,
    DraftTemplateWidgetComponent,
    InputChipComponent,
    InputDialogueBoxComponent
  ],
  exports: [
    DynamicFormComponent,
    ToastMessageComponent,
    MatSnackBarModule,
    AppBarComponent,
    DraftTemplateWidgetComponent,
    InputChipComponent,
    InputDialogueBoxComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
