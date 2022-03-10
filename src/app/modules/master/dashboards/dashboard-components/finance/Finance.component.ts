import { Component, AfterViewInit, ViewChild } from "@angular/core";

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexNonAxisChartSeries
} from 'ng-apexcharts';

export interface FinanceChartOptions {
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
    selector: "app-finance",
    templateUrl: "./Finance.component.html",
})
export class FinanceComponent implements AfterViewInit {

    @ViewChild('financechart') chart: ChartComponent = Object.create(null);
    public FinanceChartOptions: Partial<FinanceChartOptions>;

    constructor() {
        this.FinanceChartOptions = {
            series: [45, 53, 80, 90, 95],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                type: 'radialBar',
                height: 300
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            color: "#a1aab2",
                            fontSize: "18px",
                            fontWeight: "400",
                            label: 'Sales'
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
            colors: ["#53e69d",
                "#ff7676",
                "#88B8E6",
                "#BEDBE9",
                "#EDEBEE",],
        };
    }

    ngAfterViewInit() {

    }
}
