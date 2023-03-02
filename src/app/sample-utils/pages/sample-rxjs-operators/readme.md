### RxJS Operators

1. `filterNil` - this operator allow to achieve situation when only non nil (null and undefined) values.

```ts
const source$ = stream$.pipe(filterNil());
```
