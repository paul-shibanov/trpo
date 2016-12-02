import {Component, Input, ElementRef, OnChanges, HostListener, AfterViewInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

import {Node} from '../tree/node';

@Component({
  selector: 'app-tree-graph',
  templateUrl: './tree-graph.component.html',
  styleUrls: ['./tree-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeGraphComponent implements OnChanges, AfterViewInit {
  @Input() root: Node = null;
  @Input() h: number = 10;
  private host;

  constructor(private element: ElementRef) {
    this.host = d3.select(this.element.nativeElement);
  }

  @HostListener('window:resize', ['$event'])
  private _update() {
    if (this.root) {
      this.host.select('svg').remove();

      let treeData = this.root;
      const parent = this.element.nativeElement.parentNode;
      const parentWidth = parent ? parent.clientWidth : window.innerWidth - 100;
      // set the dimensions and margins of the diagram
      let margin = {top: 40, right: 90, bottom: 50, left: 90},
        width = parentWidth - margin.left - margin.right,
        height = 100 + this.h * 40 - margin.top - margin.bottom;

// declares a tree layout and assigns the size
      let treemap = d3.tree()
        .size([width, height]);

//  assigns the data to a hierarchy using parent-child relationships
      let nodes: any = d3.hierarchy(treeData);

// maps the node data to the tree layout

      nodes = treemap(nodes);

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
      let svg = this.host.append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom),
        g = svg.append('g')
          .attr('transform',
            'translate(' + margin.left + ',' + margin.top + ')');

// adds the links between the nodes
      g.selectAll('.link')
        .data(nodes.descendants().slice(1))
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', function (d: any) {
          return 'M' + d.x + ',' + d.y
            + 'C' + d.x + ',' + (d.y + d.parent.y) / 2
            + ' ' + d.parent.x + ',' + (d.y + d.parent.y) / 2
            + ' ' + d.parent.x + ',' + d.parent.y;
        });
// adds each node as a group
      let node = g.selectAll('.node')
        .data(nodes.descendants())
        .enter().append('g')
        .attr('class', function (d: any) {
          return 'node' +
            (d.children ? ' node--internal' : ' node--leaf');
        })
        .attr('transform', function (d: any) {
          return 'translate(' + d.x + ',' + d.y + ')';
        })
        .on('mouseover', function (d) {
          let sel: any = d3.select(this);
          sel.moveToFront();
        })
        .on('click', function (d) {
          let sel: any = d3.select(this);
          sel.moveToBack();
        });

// adds the circle to the node
      node.append('circle')
        .attr('r', 10);

// adds the text to the node
      node.append('text')
        .attr('dy', '.35em')
        .attr('y', function (d) {
          return 0;
        })
        .style('text-anchor', 'middle')
        .text(function (d: any) {
          return d.data.id;
        });
    }
  }

  ngOnChanges() {
    setTimeout(this._update.bind(this), 0);
  }

  ngAfterViewInit() {
    setTimeout(this._update.bind(this), 0);
  }

}


d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    let firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};
