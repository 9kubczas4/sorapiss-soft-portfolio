import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { NgUtilsComponent } from './ng-utils.component';

describe('NgUtilsComponent', () => {
  let spectator: Spectator<NgUtilsComponent>;
  const createComponent = createComponentFactory({
    component: NgUtilsComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
