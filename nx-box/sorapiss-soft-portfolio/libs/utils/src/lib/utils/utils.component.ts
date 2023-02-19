import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ssp-utils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsComponent {}
