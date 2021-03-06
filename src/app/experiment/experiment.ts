
import {Tree} from '../tree/tree';
import {Node} from '../tree/node';
export interface IExperimentTrace {
  r: number;
  h: number;
}
export class Experiment {
  private result;
  private _trees: Tree[] = [];
  constructor(private R, private _m, private n, private stopRule, private mIsConst) {
    let tree;
    let result = [];
    for (let i = 0; i < R; i++) {
      tree = new Tree(_m, n, stopRule, mIsConst);
      if (tree.p < 512) {
        i--;
        continue;
      }
      this._trees.push(tree);
    }
    this.result = result;
  }
  get trees(): Tree[] {
    return this._trees;
  }
  get roots(): Node[] {
    return this._trees.map((t: Tree) => t.root);
  }
  get m() {
    return this._m;
  }
  get p(): number {
    return this.average(this._trees.map((t: Tree) => t.p));
  }
  get b(): number {
    return this.average(this._trees.map((t: Tree) => t.b));
  }
  get alpha(): number {
    return this.average(this._trees.map((t: Tree) => t.alpha));
  }
  get h(): number {
    return this.average(this._trees.map((t: Tree) => t.h));
  }
  get px(): number {
    return this.dispersion(this._trees.map((t: Tree) => t.p));
  }
  get bx(): number {
    return this.dispersion(this._trees.map((t: Tree) => t.b));
  }
  get alphax(): number {
    return this.dispersion(this._trees.map((t: Tree) => t.alpha));
  }
  get hx(): number {
    return this.dispersion(this._trees.map((t: Tree) => t.h));
  }
  get trace(): Array<IExperimentTrace> {
    return this._trees.map((t: Tree, index) => ({r: index + 1, h: t.h}));
  }
  private average(times: number[]): number {
    let sum = times.reduce((a, b) => a + b);
    return sum / times.length;
  }
  private dispersion(times: number[]): number {
    let mx = this.average(times);
    let mx2 = this.average(times.map((t) => t * t));
    return mx2 - mx * mx;
  }
}
