import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SampleBaseDirective } from '../sample-base/sample-base.directive';

@Component({
  selector: 'ssp-parent-element',
  templateUrl: './parent-element.component.html',
  styleUrls: ['./parent-element.component.scss', './../../shared/styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentElementComponent extends SampleBaseDirective {
  name = 'Parent';
}
