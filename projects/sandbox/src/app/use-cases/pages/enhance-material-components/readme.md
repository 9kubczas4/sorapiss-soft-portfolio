## Enhance 3rd party components

In [the first article](https://dev.to/this-is-angular/directives-in-practice-user-role-based-element-control-49id) of `Directive in practice` I've described what is directive, what are types of directives and we've learned how we could use directives to implement basic user permission use cases in our app. Based on it we've discovered that directives are a really handy and powerful tool in Angular.

Now it's time to have a look at `How to enhance 3rd party components using directives?` As we already know directives could be a great solution when we would like to extend the functionality of HTML elements/components, but could we apply them also to components from external libraries?

This article will be based on an [example prepared by the official mat-table documentation](https://material.angular.io/components/table/examples#table-http). We will try to use a directive that will be responsible for sending requests to fetch data in the case when the user sorts or changes the site.

## Use case

Let us imagine the situation in which we need to implement a component that:

- presents a table of GitHub issues,
- data needs to be fetched from API using HttpClient,
- the user has to be able to sort by `creation date` and navigate through pages in a table,
- use Angular Material components to present data (mat-table, mat-sort and mat-paginator)

## Simplest solution

The simplest solution meeting the above conditions would be to create a component that would include mat-table, mat-sort and mat-paginator in the template. Then in the class of the component, using the `ViewChild` decorator we could get instances of `MatSort` and `MatPaginator`. Observing the events from these objects, we could detect when the user performed the sorting or changing of the page, in a given situation we could fetch data from the service. We could save the received data in an array that we would pass to the material table using dataSource input. A similar approach was done in the mentioned earlier [example](https://material.angular.io/components/table/examples#table-http).

## Decorate the mat-table with new features

However, let us try to achieve the same effect with the directive.

```ts
@Directive({
  selector: '[githubIssuesTable]',
  standalone: true,
  hostDirectives: [DestroyedDirective],
})
export class GithubIssuesTableDirective implements OnInit {
  @Input() paginator!: MatPaginator;

  @Self() private readonly table = inject(MatTable<GithubIssue>);
  @Self() private readonly sort = inject(MatSort);
  private readonly service = inject(GithubIssuesService);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  ngOnInit(): void {
    this.sort?.sortChange.pipe(takeUntil(this.destroyed$)).subscribe(() => (this.paginator.pageIndex = 0));

    const dataSource: Observable<GithubIssue[]> = merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith([]),
      switchMap(() =>
        this.service
          .getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex)
          .pipe(catchError(() => of(null))),
      ),
      map((data: ApiGithubIssueResponse | null) => {
        this.paginator.length = data?.total_count ?? 0;
        return data === null ? [] : data?.items;
      }),
      takeUntil(this.destroyed$),
    );

    this.table.dataSource = dataSource;
  }
}
```

We have created the GithubIssuesTableDirective which will be assigned to the element `<table mat-table matSort>`. As a result, a `MatTable<GithubIssue>` and `MatSort` instance may be injected into a directive. We should also inject a service that will allow us to send requests to the server, in this case, `GithubIssuesService`. As the paginator is an independent component not related to the table, we passed the paginator instance to the directive via Input.

According to the [material table documentation](https://material.angular.io/components/table/api#MatTable), dataSource can be provided in three ways (in order of complexity):

- Simple data array (each object represents one table row)
- The stream that emits a data array each time the array changes
- `DataSource` object that implements the connect/disconnect interface.

In our case, the best choice will be the creation of the `Observable<GithubIssue[]`. When, `this.sort.sortChange` or `this.paginator.page` emits a new value, we fetch data using the method getRepoIssues. Thus created a stream, we can assign to the table using: `this.table.dataSource = dataSource;`.

Below you can see the use of the directive in the component template.

```html
<div class="example-table-container">
  <table
    mat-table
    githubIssuesTable
    [paginator]="paginator"
    matSort
    matSortActive="created"
    matSortDisableClear
    matSortDirection="desc"
  >
    <!-- Created Column -->
    <ng-container matColumnDef="created">
      <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>Created</th>
      <td mat-cell *matCellDef="let row">{{ row.created_at | date }}</td>
    </ng-container>

    <!-- Other columns definition... -->

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
  </table>
</div>

<mat-paginator #paginator pageSize="30" aria-label="Select page of GitHub search results"></mat-paginator>

<ng-container *ngIf="getRepoIssuesMetadata$ | async as getRepoIssuesMetadata">
  <div
    class="example-loading-shade"
    *ngIf="getRepoIssuesMetadata.isLoading || getRepoIssuesMetadata.isRateLimitReached"
  >
    <mat-spinner *ngIf="getRepoIssuesMetadata.isLoading"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="getRepoIssuesMetadata.isRateLimitReached">
      GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>
</ng-container>
```

```ts
@Component({
  selector: 'app-github-issues-table',
  templateUrl: './github-issues-table.component.html',
  styleUrls: ['./github-issues-table.component.scss'],
})
export class GithubIssuesTableComponent {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  getRepoIssuesMetadata$ = this.githubIssuesService.getRepoIssuesMetadata$;

  constructor(private readonly githubIssuesService: GithubIssuesService) {}
}
```

In this case, our component remains clean, so that we increase its readability. The directive acts as a `bridge` between the component and the service, listening to events, and sending a request to the service at the right time.

## Conclusions

Above we focused exclusively on the material table component, however, let us remember that thanks to a directive we could enrich in fact all 3rd party components.

The undoubted advantage of this approach is that our wrapper component remains clean, and all the logic that could be implemented directly in the component has been moved to the directive. Thanks to this, we maintain the principle of single responsibility (**SRP**).

In addition, by enhancement 3rd party components or even our own components using directives, we support the second letter from the SOLID principles, i.e. the Open–Closed principle (**OCP**).
