import { APP_INITIALIZER, NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeatureToggleService } from '@sorapiss-soft-portfolio/utils';

const materialModules = [MatButtonModule, MatIconModule, MatToolbarModule];

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, ...materialModules],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (featureToggleService: FeatureToggleService<string>) =>
        initializeApp(featureToggleService),
      multi: true,
      deps: [FeatureToggleService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function initializeApp(
  featureToggleService: FeatureToggleService<string>
) {
  return () => featureToggleService.loadFeatureFlags();
}
