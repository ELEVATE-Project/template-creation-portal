import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { TemplateRoutingModule } from './template.routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { TemplateHomePageComponent } from './template-homepage/template-homepage.component'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TemplateHomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TemplateRoutingModule,
    MatTooltipModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class TemplateModule { }
