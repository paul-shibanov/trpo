import {Component, Input} from '@angular/core';
import { Tree } from './tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent  {

  @Input() tree: Tree = null;

  constructor() {

  }

}
