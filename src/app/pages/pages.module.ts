import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { IncrementComponent } from './components/increment/increment.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    IncrementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ]
})
export class PagesModule { }
