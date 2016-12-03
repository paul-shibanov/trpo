import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {Experiment} from './experiment';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {
  myForm: FormGroup;
  experiment: Experiment;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    const options = {
      mIsConst: false,
      mi: 3,
      n: 512,
      r: 200
    };
    this.myForm = this.formBuilder.group({
      mIsConst: new FormControl(options.mIsConst),
      mi: new FormControl(options.mi),
      n: new FormControl(options.n),
      r: new FormControl(options.r)
    });
  }
  onSubmit(value) {
    this.experiment = new Experiment(value.r, value.mi, value.n, 'A', value.mIsConst);
  }

}
