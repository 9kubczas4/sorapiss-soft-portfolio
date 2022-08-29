import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CommonUiService } from './common-ui.service';

const createService = createServiceFactory({
  service: CommonUiService,
});

describe('NgUtilsService', () => {
  let spectator: SpectatorService<CommonUiService>;
  beforeEach(() => (spectator = createService()));

  it('should create service', () => {
    expect(spectator.service).toBeTruthy();
  });
});
