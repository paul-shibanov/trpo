import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { TreeGraphComponent } from './tree-graph/tree-graph.component';
import { ChartistModule } from 'angular2-chartist';
import { TreeNodeHistComponent } from './tree-node-hist/tree-node-hist.component';
import { TreeNodeAlphaGraphComponent } from './tree-node-alpha-graph/tree-node-alpha-graph.component';
import { HeightExperimentComponent } from './height-experiment/height-experiment.component';
import { HeightExperimentGraphComponent } from './height-experiment-graph/height-experiment-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ExperimentComponent,
    HomeComponent,
    SingleComponent,
    TreeGraphComponent,
    TreeNodeHistComponent,
    TreeNodeAlphaGraphComponent,
    HeightExperimentComponent,
    HeightExperimentGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartistModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {
        path: 'single',
        children: [
          {path: 'random', component: SingleComponent},
          {path: 'constant', component: SingleComponent}
        ]
      },
      {path: 'experiment', component: ExperimentComponent},
      {path: 'height-experiment', component: HeightExperimentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
