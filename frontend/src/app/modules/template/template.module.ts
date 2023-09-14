import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { TemplateRoutingModule } from './template.routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { TemplateHomePageComponent } from './template-homepage/template-homepage.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppBarComponent } from '../shared/components/app-bar/app-bar.component';
import { TemplateCreationComponent } from './template-creation/template-creation.component';
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
  declarations: [
    TemplateHomePageComponent,
    TemplateCreationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TemplateRoutingModule,
    MatTooltipModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule,
    MatStepperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TemplateModule { }
