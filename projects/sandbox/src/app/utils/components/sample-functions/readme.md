### Sample Functions

**memo** - The function could be used instead of the pipe, the goal is to wrap any function and bind it with a template. More information you can find in this blog post: https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e.

**_Important!_** - Still much way better is to use pure pipes instead this function!

Below there is simple perfectly working solution. There is button with label `Increase` after click on it, the counter is going to be increased. To bind counter value we could use memo function, the new value will be displayed, when values of the memo parameters will change.

```html
<div>{{ plusOne(count1) }}</div>
<button (click)="count1 = count1 + 1">Increase</button>
```

```ts
count1 = 0;
plusOne = memo((count: number) => count + 1);
```

**_Important!!!_**
Memo function works perfectly fine in case when there is only one usage of wrapped function in template.
Because we are passing different values in different places in the template, the memo function will cache stuff per instance, and not per usage.

```html
<div>{{ isOdd(count2) }}</div>
<div>{{ isOdd(count2 + 1) }}</div>
<div>{{ isOdd(count2 + 2) }}</div>
<button (click)="count2 = count2 + 1">Increase</button>
```

```ts
count2 = 0;
isOdd = memo((count: number) => {
  console.log(`isOdd called: `, count);
  return count % 2 === 0;
});
```

In this case, the “isOdd called” will show up 6 times every time we click on the button.

```html
isOdd called: 1 isOdd called: 2 isOdd called: 3 isOdd called: 1 isOdd called: 2 isOdd called: 3
```
