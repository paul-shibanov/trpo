import { Component, OnInit } from '@angular/core';
import { Experiment } from './experiment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Tree } from './tree/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  tree = new Tree(3, 512, 'A', false);
  ex;
  output;
  public myForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.ex = new Experiment(200, 3, 512, 'A', false);
  }
  onSubmit(value) {
    this.tree = new Tree(value.mi, value.n, 'A', value.mIsConst);
  }
  ngOnInit() {
    this.myForm = this._fb.group({
      mIsConst: [false],
      mi: [3],
      n: [512]
    });
  }
}
