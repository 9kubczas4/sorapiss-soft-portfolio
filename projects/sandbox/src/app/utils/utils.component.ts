import { Component } from '@angular/core';
import { Page } from '../shared/interfaces/page';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent {
  pages?: Page[] = [{ label: 'Providers', url: 'providers', icon: '360' }];
}
