/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeightExperimentComponent } from './height-experiment.component';
import {MaterialModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HeightExperimentGraphComponent} from '../height-experiment-graph/height-experiment-graph.component';
import {ChartistModule} from 'angular2-chartist';

describe('HeightExperimentComponent', () => {
  let component: HeightExperimentComponent;
  let fixture: ComponentFixture<HeightExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeightExperimentComponent,
        HeightExperimentGraphComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        ReactiveFormsModule,
        ChartistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
