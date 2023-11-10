import { SelectionService } from './../../services/selection.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {
  FeatureService,
  FEATURE_SERVICE,
} from './../../interfaces/feature.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Item } from '../../interfaces/item';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { filter, first, map, startWith } from 'rxjs';
import { Column } from '../../interfaces/column';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'ssp-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgFor,
    MatCheckboxModule,
    MatSidenavModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeatureTableComponent implements OnInit {
  dataSource$ = this.service.dataSource().pipe(map((items) => items ?? []));

  columns$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.getColumns()),
    startWith(this.getColumns())
  );

  displayedColumns$ = this.columns$.pipe(
    map((column) => ['select', ...column.map((c) => c.property)])
  );

  formGroup = this.selectionService.formGroup;

  constructor(
    @Inject(FEATURE_SERVICE) private readonly service: FeatureService<Item>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    readonly selectionService: SelectionService
  ) {}

  ngOnInit(): void {
    this.service.fetch().pipe(first()).subscribe();
  }

  private getColumns(): Array<Column<Item>> {
    return (
      this.activatedRoute.parent?.parent?.routeConfig?.data?.['columns'] ?? []
    );
  }
}
