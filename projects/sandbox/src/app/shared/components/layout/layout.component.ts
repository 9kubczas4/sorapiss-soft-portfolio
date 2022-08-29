import { Component, Input } from '@angular/core';
import { Page } from '../../interfaces/page';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() pages?: Page[];
}
