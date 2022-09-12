## Component Factory Directive

### Description

The Component Factory Directive allows to dynamically insert the components into the DOM depending on the type.

### Solution

The main principle is that the dynamic components must inherit from a specific base class or implement a shared interface (in the sample it is `IComponent` interface). Next step is a map between the type name and component type (see `componentsMap` in `config.ts`). Finally, the directive can be implemented (`component-factory.directive.ts`).

### Usage

Please treat this sample more as and inspiration rather than ready to use plug&play solution. Create your own base component interface/class and adjust the directive to your needs. I didn't want to dive into very generic solution in order not to overcomplicate the code.

This sample demonstrates the usage of dynamically inserted components via component factory. The square, triangle and circle represent three different components that implement a common interface. Depending on provided [type], different component will be inserted into the DOM.
