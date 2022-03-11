import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';


import { FeedsComponent } from './dashboard-components/feeds/feeds.component';
import { PageAnalyzerComponent } from './dashboard-components/page-analyzer/pa.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule
  ],
  declarations: [
    Dashboard3Component,

    FeedsComponent,
    PageAnalyzerComponent
  ]
})
export class DashboardModule { }
