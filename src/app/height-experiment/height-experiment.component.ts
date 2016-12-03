import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {HeightExperiment} from './height-experiment';

@Component({
  selector: 'app-height-experiment',
  templateUrl: './height-experiment.component.html',
  styleUrls: ['./height-experiment.component.scss']
})
export class HeightExperimentComponent implements OnInit {
  myForm: FormGroup;
  heightExperiment: HeightExperiment;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    const options = {
      n: 512,
      r: 200
    };
    this.myForm = this.formBuilder.group({
      n: new FormControl(options.n),
      r: new FormControl(options.r)
    });
  }
  onSubmit(value) {
    this.heightExperiment = new HeightExperiment(value.r, value.n);
  }

}
