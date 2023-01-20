import { Component, OnInit } from '@angular/core';
import { SlideoutSize } from '@common-ui';

@Component({
  selector: 'app-sample-slideout',
  templateUrl: './sample-slideout.component.html',
  styleUrls: ['./sample-slideout.component.scss'],
})
export class SampleSlideoutComponent implements OnInit {
  readmeImport = import('./readme.md');
  slideoutOpened = false;
  selectedSize = SlideoutSize.STANDARD;
  SlideoutSize = SlideoutSize;

  constructor() {}

  ngOnInit(): void {}

  slideoutVisibilityChanged() {
    this.slideoutOpened = !this.slideoutOpened;
  }
}
