import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navItems = [
    {name: 'Single Random', route: 'single/random'},
    {name: 'Single Constant', route: 'single/constant'},
    {name: 'Set of Random', route: 'experiment'},
    {name: 'Height Experiment', route: 'height-experiment'}
  ];
  title = 'Software development technology experiment';
  constructor() {  }
  ngOnInit() {
  }
}
