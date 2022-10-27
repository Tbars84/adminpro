import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  @Input() donutData!: any;
  // Doughnut
  public doughnutChartLabels!: string[];
  public doughnutChartData!: ChartData<'doughnut'>;
  ngOnInit() {
    this.doughnutChartLabels= this.donutData.labelsGraphic;
    this.doughnutChartData= {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.donutData.data }
      ]
    };
  }
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
