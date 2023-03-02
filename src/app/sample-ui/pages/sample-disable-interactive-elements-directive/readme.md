## Disable Interactive Elements

### Description

`sspDisableInteractiveElements` is a directive which makes input, select and button elements as disabled/enabled. It could be used to set proper availability status of elements based on logic, for example when we would like to disable interactive elements for non-admin users.
The directive will disabled all children interactive elements of the element where directive was added.

### Usage

Add `sspDisableInteractiveElements` to html element and set value of`disabledFlag` (default `false`).

```html
<form sspDisableInteractiveElements [disabledFlag]="disabled">
  <input type="text" name="input" id="input" />
  <select name="select" id="select">
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
  <button type="button">Button</button>
</form>
```
