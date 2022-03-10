import { Component, ViewChild } from "@angular/core";


import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexTooltip,
    ApexTheme,
    ApexFill,
    ApexPlotOptions
} from 'ng-apexcharts';

export type TotalincomeChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    stroke: any;
    fill: ApexFill | any;
    theme: ApexTheme | any;
    tooltip: ApexTooltip | any;
    colors: string[] | any;
    markers: any;
    plotOptions: ApexPlotOptions | any;
};


@Component({
    selector: "app-totalincome",
    templateUrl: "./TotalIncome.component.html",
})
export class TotalIncomeComponent {

    @ViewChild("revenuechart") chart: ChartComponent = Object.create(null);
    public TotalincomeChartOptions: Partial<TotalincomeChartOptions>;

    constructor() {

        this.TotalincomeChartOptions = {
            series: [
                {
                    name: '',
                    data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3]
                },
            ],
            chart: {
                type: 'bar',
                fontFamily: 'Rubik,sans-serif',
                height: 55,
                sparkline: {
                    enabled: true
                }
            },
            fill: {
                colors: ['#2cabe3'],
                opacity: 1,

            },
            plotOptions: {
                bar: {
                    columnWidth: "15%",
                },
            },
            stroke: {
                show: true,
                width: 7,
                colors: ["transparent"],
            },
            tooltip: {
                theme: 'dark',
                fillSeriesColor: false,
                marker: {
                    show: true,
                    fillColors: ["#2cabe3"]
                },
                x: {
                    show: false
                },
            }
        }

    }

}
