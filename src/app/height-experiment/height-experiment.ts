import {Experiment} from '../experiment/experiment';
export interface IHeightExperimentTrace {
  m: number;
  h: number;
  alpha: number;
}
export class HeightExperiment {
  private _experiments: Array<Experiment> = [];

  private static average(times: Array<number>): number {
    let sum = times.reduce((a, b) => a + b);
    return sum / times.length;
  }

  constructor(private _r, private _n) {
    for (let m = 3; m < 10; ++m) {
      this._experiments.push(new Experiment(_r, m, _n, 'A', false));
    }
  }

  get alpha(): number {
    return HeightExperiment.average(this._experiments.map((e: Experiment) => e.alpha));
  }

  get h(): number {
    return HeightExperiment.average(this._experiments.map((e: Experiment) => e.h));
  }
  get trace(): Array<IHeightExperimentTrace> {
    return this._experiments.map((e: Experiment) => ({
      m: e.m,
      h: e.h,
      alpha: e.alpha
    }));
  }

}
