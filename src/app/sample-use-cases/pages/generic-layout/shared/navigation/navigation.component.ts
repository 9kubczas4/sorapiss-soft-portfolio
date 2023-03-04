import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'ssp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  tabs$ = this.activatedRoute.url.pipe(
    map((_) =>
      this.activatedRoute.routeConfig?.children?.map((item) => ({
        label: item.data?.['label'],
        path: item.path,
      }))
    )
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
