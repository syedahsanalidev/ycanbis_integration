import { Component, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexXAxis,
    ApexTooltip,
    ApexTheme,
    ApexGrid,
    ApexFill
} from 'ng-apexcharts';

export type yearlysalesChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    xaxis: ApexXAxis | any;
    yaxis: ApexYAxis | any;
    stroke: any;
    theme: ApexTheme | any;
    tooltip: ApexTooltip | any;
    dataLabels: ApexDataLabels | any;
    legend: ApexLegend | any;
    colors: string[] | any;
    markers: any;
    grid: ApexGrid | any;
    fill: ApexFill | any;
};

@Component({
    selector: 'app-yearlsales',
    templateUrl: './YearlySales.component.html'
})
export class YearlySalesComponent {

    @ViewChild("chart") chart: ChartComponent = Object.create(null);
    public yearlysalesChartOptions: Partial<yearlysalesChartOptions>;

    constructor() {
        this.yearlysalesChartOptions = {
            series: [
                {
                    name: '',
                    data: [1, 2, 5, 3, 4, 2.5, 5, 3, 1]
                },
                {
                    name: '',
                    data: [1, 4, 2, 5, 2, 5.5, 3, 4, 1]
                }
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                height: 57,
                type: 'area',
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            stroke: {
                curve: 'smooth',
                width: ['0', '2'],
                dashArray: [0, 4]
            },
            colors: ['rgba(44, 171, 227, 0.5)', 'rgba(44, 171, 227, 0.3)'],
            fill: {
                type: 'solid',
                colors: ['rgba(44, 171, 227, 0.5)', 'rgba(44, 171, 227, 0.3)'],
                opacity: 1
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
            },
            xaxis: {
            },
            tooltip: {
                theme: 'dark'
            }
        };
    }

}
