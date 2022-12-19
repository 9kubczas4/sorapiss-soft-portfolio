import { SelectionService } from './../../services/selection.service';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FeatureService, FEATURE_SERVICE } from './../../interfaces/feature.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Item } from '../../interfaces/item';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { filter, map, startWith, tap } from 'rxjs';
import { Column } from '../../interfaces/column';
import { SelectionModel } from '@angular/cdk/collections';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    NgFor,
    MatCheckboxModule,
    MatTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeatureTableComponent implements OnInit {
  dataSource$ = this.service.fetchData();
  columns$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(_ => this.getColumns()),
    tap(columns => console.log(columns)),
    startWith(this.getColumns()),
  );
  displayedColumns$ = this.columns$.pipe(map(column => ['select', ...column.map(c => c.property)]));

  formGroup = this.selectionService.formGroup;

  constructor(
    @Inject(FEATURE_SERVICE) private readonly service: FeatureService<Item>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly selectionService: SelectionService,
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = 0; //this.selection.selected.length;
    const numRows = 100; //this.dataSource.data.length;
    return false; //numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      // this.selection.clear();
      return;
    }

    // this.selection.select(...this.dataSource.data);
  }

  private getColumns(): Column[] {
    return this.activatedRoute.parent?.parent?.routeConfig?.data?.['columns'] ?? [];
  }
}
