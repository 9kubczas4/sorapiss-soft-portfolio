import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss'],
})
export class SamplePageComponent {
  content$: Observable<string> = this.activatedRoute.data.pipe(map(data => data['content']));

  constructor(private readonly activatedRoute: ActivatedRoute) {}
}
