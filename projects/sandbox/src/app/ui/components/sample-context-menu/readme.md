## Context Menu

Simple custom context menu is implemented using 3 core elements:

1. lib-context-menu - container component
2. lib-context-menu-item - menu item component
3. libContextMenuTriggerFor - directive which allows to open specified by id menu, it's possible to pass data as well using libContextMenuTriggerData.

### Usage

Sample of usage we can see below.

```html
<button [libContextMenuTriggerFor]="menu" [libContextMenuTriggerData]="sampleData">Test</button>
<lib-context-menu #menu="libMenu">
  <ng-template libContextMenuContent let-id="id">
    <lib-context-menu-item (click)="displayAlert(id, '1')">Item 1</lib-context-menu-item>
    <lib-context-menu-item (click)="displayAlert(id, '2')">Item 2</lib-context-menu-item>
    <lib-context-menu-item (click)="displayAlert(id, '3')">Item 3</lib-context-menu-item>
    <lib-context-menu-item (click)="displayAlert(id, '4')">Item 4</lib-context-menu-item>
  </ng-template>
</lib-context-menu>
```
