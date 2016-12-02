import {Component, Input, OnChanges, ViewEncapsulation, HostListener, ElementRef} from '@angular/core';
import {ChartType} from 'angular2-chartist';
import {IMi} from '../tree/tree';

@Component({
  selector: 'app-tree-node-hist',
  templateUrl: './tree-node-hist.component.html',
  styleUrls: ['./tree-node-hist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeNodeHistComponent implements OnChanges {
  @Input() miTrace: Array<IMi>;
  type: ChartType = 'Bar';
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
    this.data.labels = this.miTrace.map((a: IMi) => a.id);
    this.data.series = [this.miTrace.map((a: IMi) => a.mi)];
    this.data = Object.assign({}, this.data);
  }

}
