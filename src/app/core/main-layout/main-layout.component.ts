import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable, filter, switchMap, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Page } from '../interfaces/page';

@Component({
  selector: 'ssp-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private readonly routeChange$ = inject(Router).events.pipe(filter(e => e instanceof NavigationEnd), startWith(null));

  pages$: Observable<Page[]> | undefined = this.routeChange$
  .pipe(
    switchMap(() => this.activatedRoute?.firstChild?.firstChild?.firstChild?.data ?? of()),
    map(data => 'pages' in data ? data['pages'] : []),
  );


  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
