import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../interfaces/page';

@Component({
  selector: 'ssp-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  pages$: Observable<Page[]> | undefined = inject(ActivatedRoute).firstChild?.firstChild?.firstChild?.data.pipe(
    map(data => data['pages']),
    startWith([])
  );
}
