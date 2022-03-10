import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';

import { BrowserComponent } from './dashboard-components/browser/browser.component';
import { SiteTrafficComponent } from './dashboard-components/site-traffic/site-traffic.component';
import { SiteVisitComponent } from './dashboard-components/site-visit/site-visit.component';

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

    Dashboard4Component,

    BrowserComponent,
    SiteTrafficComponent,
    SiteVisitComponent
  ]
})
export class DashboardModule { }
