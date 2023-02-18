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

**logParametersAndReturnValue**
To write a TypeScript decorator that logs all parameters of a method and its return value, you can use the following code:

```ts
export const logParametersAndReturnValue = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  descriptor.value = (...args: any[]) => {
    const argList = args.map(arg => JSON.stringify(arg)).join(';');
    const result = originalMethod.apply(this, args);
    const resultString = JSON.stringify(result);
    console.log(`Method ${propertyKey} called with: ${argList}`);
    console.log(`Method ${propertyKey} returned: ${resultString}`);
    return result;
  };
  return descriptor;
};
```

In this code, we define a decorator function logParametersAndReturnValue that takes in three parameters:

- `target`: the class that the method belongs to.
- `propertyKey`: the name of the method being decorated.
- `descriptor`: an object that describes the method being decorated.

We first save a reference to the original method, and then replace it with a new function that logs the method parameters and return value before invoking the original method. We use the apply method to call the original method with the same this value and arguments as the new function, and return the result.

```ts
class Example {
  @logParametersAndReturnValue
  pow(a: number, b: number): number {
    return Math.pow(a, b);
  }
}

const example = new Example();
example.pow(2, 5);
```

This will output the following to the console:

- `Method pow called with: 2, 5`
- `Method pow returned: 32`

Using TypeScript decorators to log parameters and return values can be a good idea for a few reasons:

- Separation of Concerns: Separating the logging functionality from the method implementation helps keep the code modular and makes it easier to change or update the logging behavior without affecting the method itself.
- Reusability: By creating a decorator, you can easily apply the same logging behavior to multiple methods, reducing code duplication and making it easier to maintain the logging behavior.
- Debugging: Logging the method parameters and return values can help with debugging by providing insight into what values are being passed to the method and what it is returning, allowing developers to easily identify any issues or unexpected behavior.
- Testing: When writing tests, it can be useful to have a log of what arguments a method was called with and what it returned. This can help with debugging test failures and make it easier to write effective test cases.

Overall, using TypeScript decorators to log parameters and return values can help improve the maintainability, readability, and testability of your code.
