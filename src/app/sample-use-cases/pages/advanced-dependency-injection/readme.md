## Advanced Dependency Injection

### How to strongly type provided multiple instances of an injection token using inject()?

```ts
export const SAMPLE_TOKEN = new InjectionToken<string>('SAMPLE_TOKEN');


// Provide multiple instance of SAMPLE_TOKEN
providers: [
    {
      provide: SAMPLE_TOKEN,
      useValue: 'Sample Token 1',
      multi: true
    },
    {
      provide: SAMPLE_TOKEN,
      useValue: 'Sample Token 2',
      multi: true
    },
  ]

// ❌ TypeScript resolves an object as a string, but it's an array of strings
private result = inject(SAMPLE_TOKEN);
console.log(result); //['Sample Token 1', 'Sample Token 2']

// ✅ TypeScript resolves an object as an array of strings
private result = inject<string[]>(SAMPLE_TOKEN);
console.log(result); //['Sample Token 1', 'Sample Token 2']
```
