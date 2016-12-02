/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SingleComponent } from './single.component';
import {MaterialModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeComponent} from '../tree/tree.component';
import {TreeGraphComponent} from '../tree-graph/tree-graph.component';
import {TreeNodeHistComponent} from '../tree-node-hist/tree-node-hist.component';
import {TreeNodeAlphaGraphComponent} from '../tree-node-alpha-graph/tree-node-alpha-graph.component';
import {ChartistModule} from 'angular2-chartist';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import {Tree} from '../tree/tree';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SingleComponent,
        TreeComponent,
        TreeGraphComponent,
        TreeNodeHistComponent,
        TreeNodeAlphaGraphComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        ChartistModule,
        RouterModule.forRoot([
          {path: '', component: HomeComponent},
          {
            path: 'single',
            children: [
              {path: 'random', component: SingleComponent},
              {path: 'constant', component: SingleComponent}
            ]
          },
          // {path: 'experiment', component: ExperimentComponent}
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/single/constant' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    component.type = 'constant';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
