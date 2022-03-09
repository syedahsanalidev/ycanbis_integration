import { Component, AfterViewInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
// import { ChartType } from 'chart.js';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css']
})
export class Dashboard3Component implements AfterViewInit {
  // subtitle: string;
  // This is for the dashboar line chart
  public lineChartData: Array<any> = [
    { data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Site A' },
    { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Site B' }
  ];
  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public lineChartOptions: any = {
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(36,210,181,0)',
      borderColor: 'rgba(36,210,181,1)',
      pointBackgroundColor: 'rgba(36,210,181,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(36,210,181,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(32,174,227,0)',
      borderColor: 'rgba(32,174,227,1)',
      pointBackgroundColor: 'rgba(32,174,227,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(32,174,227,0.5)'
    }
  ];
  public lineChartLegend = false;
  // public lineChartType: ChartType = 'line';

  // This is for the donute chart
  donuteChart1: Chart = {
    type: 'Pie',
    data: data['Pie'],
    options: {
      donut: true,
      showLabel: false,
      donutWidth: 30,
      height: 350
    }
    // events: {
    //   draw(data: any): boolean {
    //     return data;
    //   }
    // }
  };

  ngAfterViewInit() { }
}
