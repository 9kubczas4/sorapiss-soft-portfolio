import { Component } from '@angular/core';
import { SlideoutSize } from '@sorapiss-soft-portfolio/common-ui';

@Component({
  selector: 'ssp-sample-slideout',
  templateUrl: './sample-slideout.component.html',
  styleUrls: ['./sample-slideout.component.scss'],
})
export class SampleSlideoutComponent {
  readmeImport = import('raw-loader!./readme.md');
  slideoutOpened = false;
  selectedSize = SlideoutSize.STANDARD;
  SlideoutSize = SlideoutSize;

  slideoutVisibilityChanged() {
    this.slideoutOpened = !this.slideoutOpened;
  }
}
