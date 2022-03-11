import { Component, ViewChild } from "@angular/core";
import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";

declare var require: any;

export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

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
    ApexFill,
    ApexPlotOptions
} from 'ng-apexcharts';

export type bandwidthChartOptions = {
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

export type downloadChartOptions = {
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
    plotOptions: ApexPlotOptions | any;
};

@Component({
    selector: "app-bandwidth-download",
    templateUrl: "./BandwidthDownload.component.html",
})
export class BandwidthDownloadComponent {

    @ViewChild("chart") chart: ChartComponent = Object.create(null);
    public bandwidthChartOptions: Partial<bandwidthChartOptions>;

    @ViewChild("chart") chart2: ChartComponent = Object.create(null);
    public downloadChartOptions: Partial<downloadChartOptions>;

    constructor() {

        this.bandwidthChartOptions = {
            series: [
                {
                    name: 'Bandwidth',
                    data: [5, 0, 12, 1, 8, 3, 12, 15]
                },
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                height: 120,
                type: 'line',
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
                width: 4
            },
            colors: ['#fff'],
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

        this.downloadChartOptions = {
            series: [
                {
                    name: 'Download',
                    data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 1.4, 1.1, 0.9, 2.1, 1]
                },
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                height: 125,
                type: 'bar',
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '70%',
                    barHeight: '70%',
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
                width: 1
            },
            colors: ['rgba(255, 255, 255, 0.6)'],
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
