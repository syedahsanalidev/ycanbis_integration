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

export type weeklysitevisitChartOptions = {
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
    selector: 'app-weeklysitevisit',
    templateUrl: './WeeklySiteVisit.component.html'
})
export class WeeklySiteVisitComponent {

    @ViewChild("weeklychart") chart: ChartComponent = Object.create(null);
    public weeklysitevisitChartOptions: Partial<weeklysitevisitChartOptions>;

    constructor() {
        this.weeklysitevisitChartOptions = {
            series: [
                {
                    name: '',
                    data: [0, 7, 2, 5, 3, 5, 8, 0]
                }
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                height: 50,
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
                borderColor: "transparent"
            },
            stroke: {
                curve: 'straight',
                width: 0
            },
            colors: ['#2cabe3'],
            fill: {
                type: 'solid',
                colors: ['#2cabe3'],
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
            yaxis: {
            },
            tooltip: {
                theme: 'dark'
            }
        };
    }

}
