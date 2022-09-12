import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { materialModules } from './material';
import { FeatureToggleModule, FeatureToggleService } from '@ng-utils';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,

    ...materialModules,
    FeatureToggleModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (featureToggleService: FeatureToggleService<string>) => initializeApp(featureToggleService),
      multi: true,
      deps: [FeatureToggleService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function initializeApp(featureToggleService: FeatureToggleService<string>) {
  return () => featureToggleService.loadFeatureFlags();
}
