/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreeNodeHistComponent } from './tree-node-hist.component';
import {ChartistModule} from 'angular2-chartist';

describe('TreeNodeHistComponent', () => {
  let component: TreeNodeHistComponent;
  let fixture: ComponentFixture<TreeNodeHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeHistComponent ],
      imports: [
        ChartistModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
