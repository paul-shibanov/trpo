/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExperimentComponent } from './experiment.component';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {ChartistModule} from 'angular2-chartist';
import {ExperimentGraphComponent} from '../experiment-graph/experiment-graph.component';

describe('ExperimentComponent', () => {
  let component: ExperimentComponent;
  let fixture: ComponentFixture<ExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExperimentComponent,
        ExperimentGraphComponent
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
    fixture = TestBed.createComponent(ExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
