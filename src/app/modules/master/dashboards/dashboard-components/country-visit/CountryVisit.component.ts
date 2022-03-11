import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexStroke,
    ApexTitleSubtitle,
    ApexYAxis,
    ApexTooltip,
    ApexFill,
    ApexLegend,
    ApexTheme,
    ApexResponsive,
    ApexGrid
} from "ng-apexcharts";


export type ToplocationsChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    plotOptions: ApexPlotOptions | any;
    xaxis: ApexXAxis | any;
    yaxis: ApexYAxis | any;
    stroke: ApexStroke | any;
    title: ApexTitleSubtitle | any;
    tooltip: ApexTooltip | any;
    fill: ApexFill | any;
    legend: ApexLegend | any;
    colors: string[] | any;
    theme: ApexTheme | any;
    responsive: ApexResponsive[] | any;
    grid: ApexGrid | any;
};

type ApexXAxis = {
    type?: "category" | "datetime" | "numeric";
    categories?: any;
    labels?: {
        style?: {
            colors?: string | string[];
            fontSize?: string;
        };
    };
};

@Component({
    selector: 'app-countryvisit',
    templateUrl: './CountryVisit.component.html'
})
export class CountryVisitComponent implements AfterViewInit {
    @ViewChild("chart") chart: ChartComponent = Object.create(null);
    public ToplocationsChartOptions: Partial<ToplocationsChartOptions>;

    constructor() {
        this.ToplocationsChartOptions = {
            series: [
                {
                    name: "Countries",
                    data: [44, 55, 41, 37, 22, 43]
                },
            ],
            chart: {
                fontFamily: 'Rubik,sans-serif',
                type: "bar",
                height: 326,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true,
                    // startingShape: 'flat',
                }
            },
            colors: ['#707cd2', '#ffbc34', '#2cd07e', '#212529', '#2cabe3', '#ff5050'],
            fill: {
                type: "solid",
                opacity: 1,
                colors: ['#707cd2', '#ffbc34', '#2cd07e', '#212529', '#2cabe3', '#ff5050'],
            },
            grid: {
                borderColor: 'rgba(0,0,0,0.1)',
                strokeDashArray: 2,
            },
            xaxis: {
                categories: [
                    "Italy", "USA", "Germany", "India", "France", "Spain"
                ],
                labels: {
                    style: {
                        colors: '#a1aab2'
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#a1aab2'
                    }
                }
            },
            tooltip: {
                theme: "dark",
                marker: {
                    show: false,
                },
            },
            legend: {
                show: false
            },
            responsive: [{
                options: {
                    breakpoint: 1200,
                    plotOptions: {
                        bar: {
                            columnWidth: "45%",
                            distributed: true,
                            startingShape: 'flat',
                            endingShape: 'flat',
                        }
                    },
                }
            }]
        };
    }

    ngAfterViewInit() {
    }
}
