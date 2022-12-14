import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { FEATURE_SERVICE, FeatureService } from '../../interfaces/feature.service';

@Component({
  selector: 'app-feature-tab-header',
  templateUrl: './feature-tab-header.component.html',
  styleUrls: ['./feature-tab-header.component.scss'],
})
export class FeatureTabHeaderComponent {
  actions$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(_ => this.activatedRoute.routeConfig?.data?.['actions'] ?? []),
    startWith(this.activatedRoute.routeConfig?.data?.['actions'] ?? []),
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    @Inject(FEATURE_SERVICE) private featureService: FeatureService<any>,
  ) {
    console.log(this.activatedRoute);
  }

  onClick(action: any) {
    console.log(action);
    this.featureService.fetchData();
  }
}
