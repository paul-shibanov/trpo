import {Component, Input, HostListener, ElementRef, OnChanges, ViewEncapsulation} from '@angular/core';
import {ChartType} from 'angular2-chartist';
import * as Chartist from 'chartist';
import {IExperimentTrace} from '../experiment/experiment';

@Component({
  selector: 'app-experiment-graph',
  templateUrl: './experiment-graph.component.html',
  styleUrls: ['./experiment-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperimentGraphComponent implements OnChanges {
  @Input() trace: Array<IExperimentTrace>;
  type: ChartType = 'Line';
  options = {
    fullWidth: true,
    width: '100%',
    height: '400px',
    showPoint: false,
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 1,
      fillHoles: false
    }),
    axisX: {
      type: Chartist.AutoScaleAxis,
      onlyInteger: true,
    }
  };
  data: any = {
    // labels: [],
    series: []
  };
  @HostListener('window:resize', ['$event'])
  private _update() {
    const parent = this.element.nativeElement.parentNode;
    const parentWidth = parent ? parent.clientWidth : window.innerWidth - 100;
    this.options.width = `${parentWidth}px`;
    this.options = Object.assign({}, this.options);
  }

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    this._update();
    this.data.series = [this.trace.map((a: IExperimentTrace) => ({x: a.r, y: a.h}))];
    this.data = Object.assign({}, this.data);
  }

}
