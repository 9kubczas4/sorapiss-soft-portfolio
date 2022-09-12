import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Page } from '../../interfaces/page';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  pages$: Observable<Page[]> = this.activatedRoute.data.pipe(map(data => data['pages']));

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
