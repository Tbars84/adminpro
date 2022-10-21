import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  // TODO: Crear interfaz para borrar los any vinculados al siguiente array
  percentages = [
    { name: 'progress1' , initVal : 20 , label: 'Progress primary' , type: 'bg-primary' },
    { name: 'progress2' , initVal : 40 , label: 'Progress info' , type: 'bg-info'}
  ]
  constructor() {}
  getPercent(progressBar:any) {
    return `${progressBar.initVal}% `;
  }
  changePercent(progressVal: any) {
    const iObj = progressVal.index;
    this.percentages[iObj].initVal = this.percentages[iObj].initVal + progressVal.progressUpdate;
    if (this.percentages[iObj].initVal >= 100 && progressVal.progressUpdate >= 0) {
      this.percentages[iObj].initVal = 100;
    }
    if (this.percentages[iObj].initVal <= 0 && progressVal.progressUpdate < 0) {
      this.percentages[iObj].initVal = 0;
    }
  }
}
