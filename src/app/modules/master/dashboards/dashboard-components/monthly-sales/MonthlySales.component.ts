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

export type monshtlysalesChartOptions = {
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
    selector: 'app-monthsales',
    templateUrl: './MonthlySales.component.html'
})
export class MonthlySalesComponent {

    @ViewChild("monthlychart") chart: ChartComponent = Object.create(null);
    public monshtlysalesChartOptions: Partial<monshtlysalesChartOptions>;

    constructor() {
        this.monshtlysalesChartOptions = {
            series: [
                {
                    name: '',
                    data: [1, -2, 5, 3, 0, 2.5]
                }
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                height: 57,
                type: 'line',
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 5,
                borderColor: "transparent"
            },
            stroke: {
                curve: 'smooth',
                width: ['3'],
                dashArray: [4]
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
                show: true,
                borderColor: 'rgba(0,0,0,0.1)',
                strokeDashArray: 2,
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: true
                }
            },
            tooltip: {
                theme: 'dark'
            }
        };
    }

}
