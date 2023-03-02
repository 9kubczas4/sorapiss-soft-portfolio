import {
  createDirectiveFactory,
  HostComponent,
  SpectatorDirective,
  SpectatorDirectiveFactory,
} from '@ngneat/spectator';
import { DisableInteractiveElementsDirective } from './disable-interactive-elements.directive';

const directiveFactory = (
  spectator: SpectatorDirective<DisableInteractiveElementsDirective>,
  createDirective: SpectatorDirectiveFactory<DisableInteractiveElementsDirective, HostComponent>,
  disabledFlag: boolean,
) => {
  spectator = createDirective(
    `<div [sspDisableInteractiveElements]>
    <input type="text" name="input" id="input" />
    <select name="select" id="select">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button type="button">Button</button>
    </div>`,
    {
      props: {
        disabledFlag,
      },
    },
  );

  const input = spectator.query('input') as HTMLInputElement;
  const select = spectator.query('select') as HTMLSelectElement;
  const button = spectator.query('button') as HTMLButtonElement;
  return { input, select, button, spectator };
};

describe('DisableInteractiveElementsDirective', () => {
  let spectator: SpectatorDirective<DisableInteractiveElementsDirective>;

  const createDirective = createDirectiveFactory({
    directive: DisableInteractiveElementsDirective,
    shallow: true,
  });

  it('should disable interactive elements when disabledFlag is true', () => {
    const directive = directiveFactory(spectator, createDirective, true);

    expect(directive.input.disabled).toBeTruthy();
    expect(directive.select.disabled).toBeTruthy();
    expect(directive.button.disabled).toBeTruthy();
  });

  it('should enable interactive elements when disabledFlag is false', () => {
    const directive = directiveFactory(spectator, createDirective, false);

    expect(directive.input.disabled).toBeFalsy();
    expect(directive.select.disabled).toBeFalsy();
    expect(directive.button.disabled).toBeFalsy();
  });
});
