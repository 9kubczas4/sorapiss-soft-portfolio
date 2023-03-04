import { UrlService } from './../../services/url.service';
import { UiService } from './../../services/ui.service';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, AsyncPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { Action } from '../../interfaces/action';
import {
  FEATURE_SERVICE,
  FeatureService,
} from '../../interfaces/feature.service';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { ActionsService } from '../../services/actions.service';

@Component({
  selector: 'ssp-feature-tab-header',
  templateUrl: './feature-tab-header.component.html',
  styleUrls: ['./feature-tab-header.component.scss'],
  imports: [NgFor, AsyncPipe, MatButtonModule, HamburgerComponent],
  standalone: true,
})
export class FeatureTabHeaderComponent implements OnInit {
  actions$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((_) => this.getActions()),
    startWith(this.getActions())
  );

  areTabsVisible$ = this.uiService.areTabsVisible();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly uiService: UiService,
    private readonly actionsService: ActionsService,
    private readonly urlService: UrlService,
    @Inject(FEATURE_SERVICE) private featureService: FeatureService<any>
  ) {
    console.log(this.activatedRoute);
  }

  ngOnInit(): void {
    this.urlService.setPath(this.activatedRoute.snapshot.data?.['label']);
  }

  onClick(event: Action) {
    this.actionsService.triggerAction(event.action);
  }

  tabsVisibilityChange(): void {
    this.uiService.toggleTabsVisibility();
  }

  private getActions(): Action[] {
    return this.activatedRoute.parent?.routeConfig?.data?.['actions'] ?? [];
  }
}
