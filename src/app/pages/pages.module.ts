import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PagesComponent,
    NopagefoundComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    PagesComponent,
    NopagefoundComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ]
})
export class PagesModule { }
