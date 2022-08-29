import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CommonUiComponent } from './common-ui.component';

describe('NgUtilsComponent', () => {
  let spectator: Spectator<CommonUiComponent>;
  const createComponent = createComponentFactory({
    component: CommonUiComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should match snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
