import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgApexchartsModule } from "ng-apexcharts";

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard2Component } from './dashboard2/dashboard2.component';


import {

    CommentComponent,

    ExpanceComponent,
    TotalSalesComponent,
    FinanceComponent,
    CalendarWidgetComponent,
    YearlySalesComponent,
    TotalIncomeComponent,
    MonthlySalesComponent,
    WeeklyUsageComponent,
    MonthlyUsageComponent,
    RecentSalesComponent,

    TotalEarningsComponent,
    FeedsComponent,

    TotalEarnings2Component,

} from './dashboard-components';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        RouterModule.forChild(DashboardRoutes),
        PerfectScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        NgxChartsModule,
        NgxDatatableModule,
        NgApexchartsModule
    ],
    declarations: [
        Dashboard2Component,

        CommentComponent,

        ExpanceComponent,
        TotalSalesComponent,
        FinanceComponent,
        CalendarWidgetComponent,
        YearlySalesComponent,
        TotalIncomeComponent,
        MonthlySalesComponent,
        WeeklyUsageComponent,
        MonthlyUsageComponent,
        RecentSalesComponent,

        TotalEarningsComponent,
        FeedsComponent,

        TotalEarnings2Component,

    ],
    providers: []
})
export class DashboardModule { }
