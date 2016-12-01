import { Node } from './node';
import {isNull} from 'util';

export interface IAlpha {
  p: number;
  b: number;
  alpha: number;
}
export class Tree {

  private _root: Node;
  private _p: number = 0; // nodes count;
  private _b: number = 0; // hanging nodes count;
  private _h: number = 0;
  private nodesArray: Node[] = []; // Links to each Node;
  private hangingNodesArray: Node[] = []; // Links to each hanging Node;
  private _alphaTrace:  Array<IAlpha> = [];

  private _addNTimes(arr: Node[], n: number, node: Node): void {
    for (let i = 0; i < n; ++i) {
      arr.push(node);
    };
  }
  private _removeFromHanging(node: Node) {
    const index = this.hangingNodesArray.indexOf(node);
    if (index > -1) {
      this.hangingNodesArray.splice(index, 1);
      --this._b;
    }
  }

  private _buildLevel(buildQueue: Node[]): Node[] {
    let node: Node = null;
    let parent: Node = null;
    let nextBuildQueue: Node[] = [];
    while (buildQueue.length && this._p < this._n) {
      parent = buildQueue.shift();
      node = new Node(this._p + 1, parent, this.calculateExpectedChilds(), this._h);
      this._p = this.nodesArray.push(node);
      this._b = this.hangingNodesArray.push(node);
      if (isNull(parent)) {
        this._root = node;
      } else {
        this._removeFromHanging(parent);
      }
      this._alphaTrace.push({p: this._p, b: this._b, alpha: this.alpha});
      this._addNTimes(nextBuildQueue, node.mi, node);
    }
    ++this._h;
    if (this._p >= this._n) {
      return [];
    }
    return nextBuildQueue;
  }
  private calculateExpectedChilds() {
    return this._mIsConst ? this._m : Math.floor(Math.random() * this._m);
  }
  constructor(private _m, private _n, private _stopRule, private _mIsConst) {
    let buildQueue: Node[] = [null]; // Create with null(0) parent
    while (buildQueue.length && this._p < this._n) {
      buildQueue = this._buildLevel(buildQueue);
    }
    this.hangingNodesArray.sort((a: Node, b: Node) => a.id - b.id);
  }
  get root(): Node {
    return this._root;
  }
  get hangingNodes() {
    return this.hangingNodesArray
      .map((node: Node) => node.stringIdentifier)
      .join(', ');
  }
  get nodes() {
    return this.nodesArray
      .map((node: Node) => node.stringIdentifier)
      .join(', ');
  }
  get alpha(): number {
    return this._p / this._b;
  }
  get p(): number {
    return this._p;
  }
  get b(): number {
    return this._b;
  }
  get h(): number {
    return this._h;
  }
  get alphaTrace(): Array<IAlpha> {
    return this._alphaTrace;
  }
}
