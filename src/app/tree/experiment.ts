import { Tree } from './tree';
export class Experiment {
  private result;
  constructor(private R, private m, private n, private stopRule, private mIsConst) {
    let tree;
    let row = [];
    let result = [];
    for (let i = 0; i < R; i++) {
      tree = new Tree(m, m, 'A', false);
      // tree = new Tree(m, n, stopRule, mIsConst, false);
      if (tree.p < n) {
        i--;
        continue;
      }
      row.push(i);
      row.push(tree.alpha);
      row.push(tree.p);
      row.push(tree.b);
      row.push(tree.depth);
      result.push(row);
      row = [];
    }
    this.result = result;
  }
  getResult() {
  return this.result;
  }
}
