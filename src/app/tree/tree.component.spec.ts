/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Tree } from './tree';

import { TreeComponent } from './tree.component';
import {MaterialModule} from '@angular/material';
import {TreeGraphComponent} from '../tree-graph/tree-graph.component';
import {TreeNodeHistComponent} from '../tree-node-hist/tree-node-hist.component';
import {TreeNodeAlphaGraphComponent} from '../tree-node-alpha-graph/tree-node-alpha-graph.component';
import {ChartistModule} from 'angular2-chartist';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TreeComponent,
        TreeGraphComponent,
        TreeNodeHistComponent,
        TreeNodeAlphaGraphComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        ChartistModule
        // FormsModule,
        // ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    component.tree = new Tree(2, 10, 'A', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
