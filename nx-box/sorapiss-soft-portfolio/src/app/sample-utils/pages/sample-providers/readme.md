## Providers

### Motivation

Angular as a powerful frontend framework has implemented out of the box DI. It allows us to inject services, values or object to other angular classes like components, services etc. It's giving us ability to code with SOLID patterns, with loosely coupling and much way easier to test. Below there are a few examples of helpful providers like window/localStorage/location etc. The benefit of using such provider for LocalStorage it's definitely that it's much way easier to apply unit tests, but also you can inject it in more I'd say `Angular way`.

### Usage

Providers has to be defined in the provider list on the component or module level.

```ts
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
  providers: [LocalStorageProvider, LocationProvider, WindowProvider],
})
```

Then you need to inject specific dependencies using the Injection Token.

```ts
  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    @Inject(LOCATION) private readonly location: Location,
    @Inject(WINDOW) private readonly window: Window) {}
```

At this point we've got everything to start work with, cause we've access to all injected objects.

**Local Storage**

```ts
this.localStorage.getItem(LOCAL_SAMPLE_STORAGE_KEY);
```

**Window**

```ts
this.windowHistoryState = this.window.history.state;
```

**Location**

```ts
this.location.reload();
```
