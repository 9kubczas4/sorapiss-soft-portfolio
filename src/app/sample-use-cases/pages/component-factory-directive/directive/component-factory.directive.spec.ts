import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { ComponentFactoryDirective } from './component-factory.directive';

describe('WidgetDirective', () => {
  let spectator: SpectatorDirective<ComponentFactoryDirective>;
  let directive: ComponentFactoryDirective;

  const createDirective = createDirectiveFactory({
    directive: ComponentFactoryDirective,
    shallow: true,
  });

  it('should not create widget type component', () => {
    spectator = createDirective(`<div [appComponentFactory]></div>`);
    directive = spectator.directive;

    expect(directive.component).toBeFalsy();
  });

  it('should create widget type component', () => {
    spectator = createDirective(
      `<div [appComponentFactory] type="square"></div>`
    );
    directive = spectator.directive;

    expect(directive.component).toBeTruthy();
    expect(directive.component?.instance.type).toBe('square');
  });
});
