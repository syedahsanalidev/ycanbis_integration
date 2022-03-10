import { Component, AfterViewInit, ViewChild } from "@angular/core";
import * as c3 from "c3";

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexFill,
    ApexTheme,
    ApexXAxis,
    ApexYAxis,
    ApexGrid
} from 'ng-apexcharts';

export interface expanceChartOptions {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    stroke: ApexStroke | any;
    dataLabels: ApexDataLabels | any;
    legends: ApexLegend | any;
    labels: any;
    name: any;
    tooltip: ApexTooltip | any;
    colors: string[] | any;
    plotOptions: ApexPlotOptions | any,
    grid: ApexGrid | any,
    fill: ApexFill | any,
    xaxis: ApexXAxis | any,
    yaxis: ApexYAxis | any,
    theme: ApexTheme | any
}

@Component({
    selector: "app-expance",
    templateUrl: "./Expance.component.html",
})
export class ExpanceComponent implements AfterViewInit {

    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public expanceChartOptions: Partial<expanceChartOptions>;

    constructor() {
        this.expanceChartOptions = {
            series: [
                {
                    name: "Site A",
                    type: "column",
                    data: [5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                },
                {
                    name: "Site B",
                    type: "column",
                    data: [1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3],
                },
            ],
            chart: {
                type: 'line',
                height: 130,
                fontFamily: 'Rubik,sans-serif',
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true
                },
                stacked: false,
            },
            tooltip: {
                fillSeriesColor: false,
                theme: "dark"
            },
            dataLabels: {
                enabled: false,
            },
            legends: {
                show: false,
            },
            plotOptions: {
                bar: {
                    columnWidth: "35%",
                },
            },
            colors: ['rgba(255,255,255)', 'rgba(255,255,255,0.5)'],
            fill: {
                type: "solid",
                colors: ['rgba(255,255,255)', 'rgba(255,255,255,0.5)'],
                opacity: 1
            },
            stroke: {
                width: 0,
            },
            grid: {
                show: false
            },
            xaxis: {
            },
            yaxis: {
            },
        };
    }

    ngAfterViewInit() {
    }
}
