import { ComponentRef, Directive, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { componentsMap } from '../config/config';
import { ComponentTypes } from '../enums/component-type';
import { IComponent } from '../interfaces/component-factory-directive.interfaces';

@Directive({
  selector: '[appComponentFactory]',
})
export class ComponentFactoryDirective implements OnInit, OnChanges {
  @Input() type?: ComponentTypes;
  @Input() color?: string;

  component?: ComponentRef<IComponent>;

  constructor(private container: ViewContainerRef) {}

  ngOnInit() {
    if (this.type) {
      this.initComponent(this.type);
    }
  }

  initComponent(type: ComponentTypes) {
    const componentType = componentsMap[type];
    if (!componentType) {
      return;
    }
    this.component = this.container.createComponent(componentType);

    if (this.color) {
      this.component.instance.color = this.color;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('color' in changes && this.component) {
      this.component.instance.color = changes['color'].currentValue;
    }
  }
}
