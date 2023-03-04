import { UiService } from './services/ui.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ssp-generic-layout',
  templateUrl: './generic-layout.component.html',
  styleUrls: ['./generic-layout.component.scss'],
})
export class GenericLayoutComponent {
  areTabsHidden$ = this.uiService
    .areTabsVisible()
    .pipe(map((areTabsVisible) => !areTabsVisible));

  constructor(private readonly uiService: UiService) {}
}
