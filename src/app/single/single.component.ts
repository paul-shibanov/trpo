import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, UrlSegment} from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Tree } from '../tree/tree';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  type: string = '';
  public myForm: FormGroup;
  tree: Tree = null;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.url.subscribe((f: Array<UrlSegment>) => {
      this.type = f[0].path || 'constant';
      let options: any = {};
      switch (this.type) {
        case 'random':
          options = {
            mIsConst: false,
            mi: 3,
            n: 512,
            degenerated: true,
          };
          break;
        case 'constant':
          options = {
            mIsConst: true,
            mi: 2,
            n: 100,
            degenerated: false,
          };
          break;
        default:
          throw new Error(`Unsupported type of tree: ${this.type}`);
      }
      if (this.myForm) {
        this.myForm.patchValue(options);
      } else {
        this.myForm = this.formBuilder.group({
          mIsConst: new FormControl(options.mIsConst),
          mi: new FormControl(options.mi),
          n: new FormControl(options.n),
          degenerated: new FormControl(options.degenerated)
        });
      }
    });
  }
  onSubmit(value) {
    this.tree = new Tree(value.mi, value.n, 'A', value.mIsConst);
    if (value.degenerated) {
      while (this.tree.p < value.n) {
        this.tree = new Tree(value.mi, value.n, 'A', value.mIsConst);
      }
    }
  }

}
