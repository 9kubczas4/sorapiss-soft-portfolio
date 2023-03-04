import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  UrlTree,
} from '@angular/router';
import { FeatureToggleRouteData } from '../models/feature-toggle.model';
import { FeatureToggleService } from '../services/feature-toggle.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleGuard<T extends string>
  implements CanActivate, CanLoad, CanActivateChild
{
  constructor(
    private readonly featureToggle: FeatureToggleService<T>,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.#isEnabled(route);
  }

  canLoad(route: Route): boolean | UrlTree {
    return this.#isEnabled(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.#isEnabled(route);
  }

  #isEnabled(route: ActivatedRouteSnapshot | Route): boolean | UrlTree {
    const featureToggleRouteData = route.data as FeatureToggleRouteData<T>;
    return this.featureToggle.isFlagEnabled(featureToggleRouteData.featureFlag)
      ? true
      : featureToggleRouteData.featureFlagRedirect
      ? this.router.createUrlTree([featureToggleRouteData.featureFlagRedirect])
      : false;
  }
}
