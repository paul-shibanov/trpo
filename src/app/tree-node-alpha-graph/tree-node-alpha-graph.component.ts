import {Component, Input, HostListener, ElementRef, OnChanges} from '@angular/core';
import {IAlpha} from '../tree/tree';
import {ChartType} from 'angular2-chartist';

@Component({
  selector: 'app-tree-node-alpha-graph',
  templateUrl: './tree-node-alpha-graph.component.html',
  styleUrls: ['./tree-node-alpha-graph.component.scss']
})
export class TreeNodeAlphaGraphComponent implements OnChanges {
  @Input() alphaTrace: Array<IAlpha>;
  type: ChartType = 'Line';
  options = {
    fullWidth: true,
    width: '100%',
    height: '200px'
  };
  data: any = {
    labels: [],
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
    this.data.labels = this.alphaTrace.map((a: IAlpha) => a.p);
    this.data.series = [this.alphaTrace.map((a: IAlpha) => a.alpha)];
    this.data = Object.assign({}, this.data);
  }

}
