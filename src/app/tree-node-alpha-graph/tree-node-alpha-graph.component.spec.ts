/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreeNodeAlphaGraphComponent } from './tree-node-alpha-graph.component';
import {ChartistModule} from 'angular2-chartist';

describe('TreeNodeAlphaGraphComponent', () => {
  let component: TreeNodeAlphaGraphComponent;
  let fixture: ComponentFixture<TreeNodeAlphaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeAlphaGraphComponent ],
      imports: [
        ChartistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeAlphaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
