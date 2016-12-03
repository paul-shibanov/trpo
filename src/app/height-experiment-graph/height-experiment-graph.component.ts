import {Component, Input, HostListener, ElementRef, OnChanges, ViewEncapsulation} from '@angular/core';
import {ChartType} from 'angular2-chartist';
import * as Chartist from 'chartist';
import {IHeightExperimentTrace} from '../height-experiment/height-experiment';

@Component({
  selector: 'app-height-experiment-graph',
  templateUrl: './height-experiment-graph.component.html',
  styleUrls: ['./height-experiment-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeightExperimentGraphComponent implements OnChanges {
  @Input() trace: Array<IHeightExperimentTrace>;
  type: ChartType = 'Line';
  options = {
    fullWidth: true,
    width: '100%',
    height: '200px',
    showPoint: false,
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 1,
      fillHoles: false
    }),
    // axisX: {
    //   // type: Chartist.AutoScaleAxis,
    //   onlyInteger: true,
    // }
  };
  alphaData: any = {};
  hData: any = {};
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
    // console.log(this.trace);
    let labels = this.trace.map((a: IHeightExperimentTrace) => a.m);
    this.alphaData.labels = labels;
    this.hData.labels = labels;
    this.alphaData.series = [this.trace.map((a: IHeightExperimentTrace) => a.alpha)];
    this.hData.series = [this.trace.map((a: IHeightExperimentTrace) => a.h)];
    this.alphaData = Object.assign({}, this.alphaData);
    this.hData = Object.assign({}, this.hData);
  }

}
