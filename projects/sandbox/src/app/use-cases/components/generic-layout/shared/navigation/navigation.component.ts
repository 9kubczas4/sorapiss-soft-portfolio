import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  tabs$ = this.activatedRoute.url.pipe(
    map(_ =>
      this.activatedRoute.routeConfig?.children?.map(item => ({
        label: item.data?.['label'],
        path: item.path,
      })),
    ),
  );

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.routeConfig?.children);
  }
}
