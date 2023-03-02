import { createDirectiveFactory, mockProvider, SpectatorDirective } from '@ngneat/spectator/jest';
import { TestFeatureFlag } from '../services/feature-toggle.fixture';
import { FeatureToggleService } from '../services/feature-toggle.service';
import { FeatureToggleDirective } from './feature-toggle.directive';

describe('FeatureToggleDirective', () => {
  describe('FeatureToggleDirective - enabled', () => {
    let spectator: SpectatorDirective<FeatureToggleDirective<TestFeatureFlag>>;

    const createHost = createDirectiveFactory<FeatureToggleDirective<TestFeatureFlag>>({
      directive: FeatureToggleDirective,
      providers: [
        mockProvider(FeatureToggleService, {
          isFlagEnabled: jest.fn().mockReturnValue(true),
        }),
      ],
    });

    it('should display element when feature enabled', () => {
      spectator = createHost(`<div *sspFeatureToggle="'enabledFeature'" id="enabled">Enabled</div>`);

      expect(spectator.element.querySelector('#enabled')).toExist();
      expect(spectator.element.querySelector('#enabled')).toHaveExactText('Enabled');
    });
  });

  describe('FeatureToggleDirective - disabled', () => {
    let spectator: SpectatorDirective<FeatureToggleDirective<TestFeatureFlag>>;

    const createHost = createDirectiveFactory<FeatureToggleDirective<TestFeatureFlag>>({
      directive: FeatureToggleDirective,
      providers: [
        mockProvider(FeatureToggleService, {
          isFlagEnabled: jest.fn().mockReturnValue(false),
        }),
      ],
    });

    it('should not display element when feature disabled', () => {
      spectator = createHost(`<div *sspFeatureToggle="'disabledFeature'" id="disabled">Disabled</div>`);

      expect(spectator.element.querySelector('#disabled')).not.toExist();
    });

    it('should display else template when feature disabled', () => {
      spectator = createHost(`
          <div *sspFeatureToggle="'disabledFeature' else disabledTemplate" id="disabled">Disabled</div>
          <ng-template #disabledTemplate><div id="elseDisabled">Else disabled</div></ng-template>
      `);

      expect(spectator.element.querySelector('#disabled')).not.toExist();
      expect(spectator.element.querySelector('#elseDisabled')).toExist();
      expect(spectator.element).toHaveExactText('Else disabled');
    });
  });
});
