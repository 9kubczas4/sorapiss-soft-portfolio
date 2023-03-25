import { ChildElementWithDefaultStrategyComponent } from './child-element-with-default-strategy/child-element-with-default-strategy.component';
import { ChildElementComponent } from './child-element/child-element.component';
import { ElementWithAsyncPipeComponent } from './element-with-async-pipe/element-with-async-pipe.component';
import { ElementWithGetterComponent } from './element-with-getter/element-with-getter.component';
import { ElementWithPipeComponent } from './element-with-pipe/element-with-pipe.component';
import { ElementWithTemplateFunctionComponent } from './element-with-template-function/element-with-template-function.component';
import { ParentElementComponent } from './parent-element/parent-element.component';

export const components = [
  ParentElementComponent,
  ChildElementComponent,
  ChildElementWithDefaultStrategyComponent,
  ElementWithPipeComponent,
  ElementWithAsyncPipeComponent,
  ElementWithGetterComponent,
  ElementWithTemplateFunctionComponent,
];
