import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { NgUtilsService } from './ng-utils.service';

const createService = createServiceFactory({
  service: NgUtilsService,
});

describe('NgUtilsService', () => {
  let spectator: SpectatorService<NgUtilsService>;
  beforeEach(() => (spectator = createService()));

  it('should create service', () => {
    expect(spectator.service).toBeTruthy();
  });
});
