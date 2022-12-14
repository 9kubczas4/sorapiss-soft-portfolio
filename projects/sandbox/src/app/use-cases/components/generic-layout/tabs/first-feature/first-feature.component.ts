import { Component, Inject } from '@angular/core';
import { FEATURE_SERVICE, FeatureService } from '../../interfaces/feature.service';

@Component({
  selector: 'app-first-feature',
  templateUrl: './first-feature.component.html',
  styleUrls: ['./first-feature.component.scss'],
})
export class FirstFeatureComponent {
  constructor(@Inject(FEATURE_SERVICE) featureService: FeatureService<any>) {}
}
