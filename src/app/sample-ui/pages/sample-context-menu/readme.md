## Context Menu

Simple custom context menu is implemented using 3 core elements:

1. ssp-context-menu - container component
2. ssp-context-menu-item - menu item component
3. sspContextMenuTriggerFor - directive which allows to open specified by id menu, it's possible to pass data as well using sspContextMenuTriggerData.

### Usage

Sample of usage we can see below.

```html
<button
  [sspContextMenuTriggerFor]="menu"
  [sspContextMenuTriggerData]="sampleData"
>
  Test
</button>
<ssp-context-menu #menu="sspMenu">
  <ng-template sspContextMenuContent let-id="id">
    <ssp-context-menu-item (click)="displayAlert(id, '1')"
      >Item 1</ssp-context-menu-item
    >
    <ssp-context-menu-item (click)="displayAlert(id, '2')"
      >Item 2</ssp-context-menu-item
    >
    <ssp-context-menu-item (click)="displayAlert(id, '3')"
      >Item 3</ssp-context-menu-item
    >
    <ssp-context-menu-item (click)="displayAlert(id, '4')"
      >Item 4</ssp-context-menu-item
    >
  </ng-template>
</ssp-context-menu>
```
