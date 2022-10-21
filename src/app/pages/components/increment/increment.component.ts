import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent {
  @Input()
  progressObj!: any;
  @Input()
  index!: any;
  @Output()
  percentProgress = new EventEmitter<any>();
  constructor() {}

  updatePercent(val: number) {
    this.percentProgress.emit({
      index: this.index ,
      progressUpdate: val,
    });
  }
}
