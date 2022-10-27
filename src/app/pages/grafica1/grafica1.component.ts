import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {
  donutsData = [
    {
      title: 'Sales',
      labelsGraphic: ['Download sales', 'In-store sales' , 'Mail-order sales'],
      data: [ 350, 400, 100 ]
    },
    {
      title: 'Incomings',
      labelsGraphic: ['Download incomings', 'In-store incomings' , 'Mail-order incomings'],
      data: [ 600, 200, 150 ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
