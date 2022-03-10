import { Component, ViewChild } from '@angular/core';
// import * as Chartist from 'chartist';
// import { ChartType, ChartEvent } from 'ng-chartist';

// declare var require: any;

// interface Chart {
//     type: ChartType;
//     data: Chartist.IChartistData;
//     options?: any;
//     responsiveOptions?: any;
//     events?: ChartEvent;
// }

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexTooltip,
    ApexTheme,
    ApexFill,
    ApexPlotOptions,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexDataLabels
} from 'ng-apexcharts';

export type weekusageChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    stroke: any;
    fill: ApexFill | any;
    theme: ApexTheme | any;
    tooltip: ApexTooltip | any;
    colors: string[] | any;
    markers: any;
    plotOptions: ApexPlotOptions | any;
    xaxis: ApexXAxis | any;
    yaxis: ApexYAxis | any;
    grid: ApexGrid | any;
    dataLabels: ApexDataLabels | any;
};

@Component({
    selector: 'app-weekusage',
    templateUrl: './WeeklyUsage.component.html'
})
export class WeeklyUsageComponent {

    @ViewChild("revenuechart") chart: ChartComponent = Object.create(null);
    public weekusageChartOptions: Partial<weekusageChartOptions>;


    constructor() {
        this.weekusageChartOptions = {
            series: [
                {
                    name: 'Usage',
                    data: [50, 40, 30, 70, 50, 20, 30]
                },
            ],
            chart: {
                type: 'bar',
                fontFamily: 'Rubik,sans-serif',
                height: 350,
                offsetY: -60,
                toolbar: {
                    show: false
                }
            },
            grid: {
                show: false
            },
            fill: {
                colors: ['#2cabe3'],
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    columnWidth: "40%",

                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 7,
                colors: ["transparent"],
            },
            xaxis: {
                type: 'category',
                categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                labels: {
                    show: true,
                    style: {
                        colors: ['#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2', '#a1aab2']
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            },
            yaxis: {
                show: false
            },
            tooltip: {
                theme: 'dark',
                fillSeriesColor: false,
                marker: {
                    show: true,
                    fillColors: ['#2cabe3']
                },
                x: {
                    show: false
                },
            }
        }
    }

}
