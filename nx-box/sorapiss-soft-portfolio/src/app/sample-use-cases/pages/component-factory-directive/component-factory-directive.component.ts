import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentTypes } from './enums/component-type';

@Component({
  selector: 'ssp-component-factory-directive',
  templateUrl: './component-factory-directive.component.html',
  styleUrls: ['./component-factory-directive.component.scss'],
})
export class ComponentFactoryDirectiveComponent {
  readmeImport = import('raw-loader!./readme.md');
  componentTypes = ComponentTypes;
  dynamicComponents = [
    { type: ComponentTypes.circle, color: 'red' },
    { type: ComponentTypes.square, color: 'blue' },
  ];

  form = new FormGroup({
    componentType: new FormControl('', Validators.required),
    componentColor: new FormControl('', Validators.required),
  });

  addDynamicComponent() {
    if (this.form.valid) {
      this.dynamicComponents.push({
        type: this.form.value.componentType as ComponentTypes,
        color: this.form.value.componentColor as string,
      });
      this.form.reset();
    }
  }
}
