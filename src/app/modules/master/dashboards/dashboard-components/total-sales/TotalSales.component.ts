import { Component, AfterViewInit, ViewChild } from '@angular/core';
// import * as c3 from 'c3';

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexNonAxisChartSeries,
    ApexAxisChartSeries,
    ApexXAxis,
    ApexYAxis,
    ApexTheme,
    ApexFill,
    ApexGrid,
    ApexResponsive
} from 'ng-apexcharts';

export interface TotalSalesChartOptions {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart | any;
    stroke: ApexStroke | any;
    dataLabels: ApexDataLabels | any;
    legends: ApexLegend | any;
    labels: any;
    name: any;
    tooltip: ApexTooltip | any;
    colors: string[] | any;
    plotOptions: ApexPlotOptions | any
}

@Component({
    selector: 'app-totalsales',
    templateUrl: './TotalSales.component.html'
})
export class TotalSalesComponent implements AfterViewInit {

    @ViewChild('totalsaleschart') chart: ChartComponent = Object.create(null);
    public TotalSalesChartOptions: Partial<TotalSalesChartOptions>;

    constructor() {
        this.TotalSalesChartOptions = {
            series: [40, 12, 28, 60],
            chart: {
                fontFamily: 'Nunito Sans,sans-serif',
                type: 'donut',
                height: 300
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75px',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 10
                            },
                            value: {
                                show: false,
                                color: '#99abb4',
                            },
                            total: {
                                show: true,
                                label: 'Sales',
                                color: '#99abb4',
                            }
                        }
                    }
                }
            },
            tooltip: {
                fillSeriesColor: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 0
            },
            legends: {
                show: false,
            },
            labels: ['Open', 'Clicked', 'Un-opened', 'Bounced'],
            colors: ['#2cabe3', '#2cd07e', '#ff5050', '#7bcef3'],
        };
    }

    ngAfterViewInit() {
    }
}
