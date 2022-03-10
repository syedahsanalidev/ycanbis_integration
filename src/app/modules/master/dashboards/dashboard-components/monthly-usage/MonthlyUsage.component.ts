import { Component, AfterViewInit, ViewChild } from '@angular/core';

import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexTooltip,
    ApexTheme,
    ApexFill,
    ApexPlotOptions,
    ApexNonAxisChartSeries
} from 'ng-apexcharts';

export type monthlyusageChartOptions = {
    series: ApexNonAxisChartSeries | any;
    chart: ApexChart | any;
    labels: string[] | any;
    plotOptions: ApexPlotOptions | any;
    fill: ApexFill | any;
};

@Component({
    selector: 'app-monthusage',
    templateUrl: './MonthlyUsage.component.html'
})
export class MonthlyUsageComponent implements AfterViewInit {

    @ViewChild("monthlyusageChartOptions") chart3: ChartComponent = Object.create(null);
    public monthlyusageChartOptions: Partial<monthlyusageChartOptions>;

    constructor() {
        this.monthlyusageChartOptions = {
            series: [76],
            chart: {
                fontFamily: 'Nunito Sans,sans-serif',
                type: "radialBar",
                offsetY: -20,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        margin: 15,
                        size: "70%"
                    },
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: "80%",
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: false,
                            top: 2,
                            left: 0,
                            opacity: 0.31,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "16px",
                            color: '#99abb4'
                        }
                    }
                }
            },
            fill: {
                colors: ['rgb(44, 208, 126)']
            },
            labels: ["Estimated Sales"]
        };
    }

    ngAfterViewInit() {
    }
}
