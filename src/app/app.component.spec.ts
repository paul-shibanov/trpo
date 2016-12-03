/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component';
import {MaterialModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExperimentComponent} from './experiment/experiment.component';
import {HomeComponent} from './home/home.component';
import {SingleComponent} from './single/single.component';
import {TreeGraphComponent} from './tree-graph/tree-graph.component';
import {TreeNodeHistComponent} from './tree-node-hist/tree-node-hist.component';
import {TreeNodeAlphaGraphComponent} from './tree-node-alpha-graph/tree-node-alpha-graph.component';
import {RouterModule} from '@angular/router';
import {ChartistModule} from 'angular2-chartist';
import {APP_BASE_HREF} from '@angular/common';
import {ExperimentGraphComponent} from './experiment-graph/experiment-graph.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TreeComponent,
        ExperimentComponent,
        ExperimentGraphComponent,
        HomeComponent,
        SingleComponent,
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
          {path: 'experiment', component: ExperimentComponent}
        ]),
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Software development technology experiment');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Software development technology experiment');
  }));
});
