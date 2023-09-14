import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateHomePageComponent} from "./template-homepage/template-homepage.component";
import { TemplateCreationComponent } from './template-creation/template-creation.component';



const routes: Routes = [
  {
    path: 'template-homepage', component: TemplateHomePageComponent
  },
  {
    path: 'template-creation', component: TemplateCreationComponent
  },
  {
    path:'',redirectTo:'template-homepage',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
