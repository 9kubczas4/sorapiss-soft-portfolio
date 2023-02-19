import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ssp-ui-common-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-ui.component.html',
  styleUrls: ['./common-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonUiComponent {}
