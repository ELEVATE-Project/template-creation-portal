import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateHomePageComponent} from "./template-homepage/template-homepage.component";



const routes: Routes = [
  {
    path: 'template-homepage', component: TemplateHomePageComponent
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
