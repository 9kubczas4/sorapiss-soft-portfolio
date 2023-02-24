## User Permissions - simple solution with two roles

Article available at:

- https://dev.to/this-is-angular/directives-in-practice-user-role-based-element-control-49id
- https://medium.com/@pawel.kubiak.dev/directives-in-practice-user-role-based-element-control-47ac72820847

Directives are one of the core elements of the Angular framework however, for some reason they are underrated and underused. It could be changed in the future, cause Angular Team introduced [Directive Composition API](https://angular.io/guide/directive-composition-api) in v15 which could be a game changer and it could encourage more developers to use them more willingly. In a series of articles `Directives in practice`, I would like to elaborate on real-life use cases where you could consider the usage of directives. Let’s start with a use case called _user role-based element control_.

## A quick reminder of the theory

**What is a directive?**

> _A directive is a class with a @Directive decorator that allows you to create custom behavior and structure in your HTML templates. Directives are used to extend the functionality of HTML elements by attaching custom logic to them. They can be used to add new elements, modify existing elements, or change the behavior of elements._

**What are the types of directives?**

- **structural** — used to change the structure of the DOM, identified by an asterisk (*) before the directive name, for example `*ngIf`, `*ngFor`or`*ngSwitch`,
- **attribute** — used to change the behavior or appearance of an individual component or HTML element, for example `ngClass`, `ngStyle` or `ngModel`.

## Use case requirements

Imagine a situation that an angular application is used by several user roles, in our example it could be: **_editor_** and **_viewer_**. Management wants to disable interactive elements and restrict access to several elements on the page for the viewer role. Due to such a situation, there are new requirements to implement:

- possibility to display elements on the page only for not viewers,
- possibility to disable interactive elements (for example buttons, selects etc.) for viewers.

## Don’t use \*ngIf everywhere!

The simplest way to hide an element in Angular is of course \*ngIf, however direct usage of it would be inefficient and could be defect prone for this particular use case. Why? Let’s have a look at the code snippets below:

```ts
export const enum UserRole {
  Editor = 'editor',
  Viewer = 'viewer',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly #currentUser$ = new Subject<User>();
  readonly isViewer$ = this.#currentUser$.pipe(
    map(user => user.role === UserRole.Viewer),
    startWith(true),
  );

  getCurrentUser = (): Observable<User> => this.#currentUser$.asObservable();

  setCurrentUser = (user: User): void => {
    this.#currentUser$.next(user);
  };
}

@Component({
  selector: 'ssp-sample',
  template: `
    <mat-list *ngIf="!(userService.isViewer$ | async)" role="list">
      <mat-list-item role="listitem">Setting 1</mat-list-item>
      <mat-list-item role="listitem">Setting 2</mat-list-item>
    </mat-list>
  `,
})
export class SampleComponent {
  constructor(readonly userService: UserService) {}
}
```

There is a simple user service where we could store information about the currently logged-in user and his user role. To hide the mat-list element in the template of the sample component we should inject `UserService` into the constructor, then use an async pipe which will subscribe to the `isViewer$` observable. The mat-list element will be visible only when `isViewer$` will emit false. At first glance everything looks fine, but:

- **What if you will need to implement such logic in tens of components?**
  Then you will need to inject `UserService` into each of those components and apply the same condition to `*ngIf` in all templates. Smell a little bit like _copy/paste_ pattern. Another question arises: What if you will need to change the condition in all of those places?
- **What if by mistake you will forgot about the exclamation mark inside \*ngIf?**
  Then confidential data/components will be displayed for the wrong group of users.

## Harness the capabilities of structural directives

A clean solution for displaying content only for editors could be the implementation of a custom structural directive.

```ts
@Directive({
  selector: '[ifNotViewer]',
  standalone: true,
  hostDirectives: [NgIf, DestroyedDirective],
})
export class IfNotViewerDirective implements OnInit {
  private readonly ngIfDirective = inject(NgIf);
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.isViewer$.pipe(takeUntil(this.destroyed$)).subscribe(isViewer => {
      this.ngIfDirective.ngIf = !isViewer;
    });
  }
}
```

Since the Angular 15 implementation, some of the structural directives is simplified because of **Directive Composition API**. `IfNotViewerDirective` has 2 host directives: well-known `NgIf` and `DestroyedDirective` (\*). In the ngOnInit lifecycle hook, the directive is subscribing to the `isViewer$` observable, then based on the emitted value we could assign a condition to ngIf, when isViewer will be false, then the ngIf directive will render content.

For older versions of Angular you will need to inject `TemplateRef` (it’s a reference to the template which will be rendered if the condition will be equal to true) and `ViewContainerRef` (you can render the template using `createEmbeddedView` method, there will be useful `clear()` method).

(\*) `DestroyedDirective` was implemented according to the idea of [Kristiyan Kostadinov](https://twitter.com/_crisbeto).

Usage of the directive is really easy, cause you need to assign a directive selector to an element.

```ts
@Component({
  selector: 'ssp-sample',
  template: `
    <mat-list *ifNotViewer role="list">
      <mat-list-item role="listitem">Setting 1</mat-list-item>
      <mat-list-item role="listitem">Setting 2</mat-list-item>
    </mat-list>
  `,
})
export class SampleComponent {}
```

## Let’s extend the behavior of components

The second problem to solve was: disabling interactive elements like buttons or select lists for read-only users. Again we could inject `UserService` to each of the components where we would like to disable elements and then bind the value of `isViewer$` to the attribute or input of the interactive element.

Once again directives come to help, in this scenario, it will be custom attribute directives. Please have a look at the code snippet below.

```ts
@Directive({
  selector: '[disableIfViewer]',
  standalone: true,
  hostDirectives: [DestroyedDirective],
})
export class DisableIfViewerDirective implements OnInit {
  private readonly destroyed$ = inject(DestroyedDirective).destroyed$;

  constructor(
    private readonly userService: UserService,
    @Optional() @Self() private readonly button: MatButton,
    @Optional() @Self() private readonly select: MatSelect,
  ) {}

  ngOnInit(): void {
    this.userService.isViewer$.pipe(takeUntil(this.destroyed$)).subscribe(isViewer => {
      if (this.button) {
        this.button.disabled = isViewer;
      } else if (this.select) {
        this.select.disabled = isViewer;
      }
    });
  }
}
```

The `DisableIfViewerDirective` is an attribute directive that can be used to disable an element based on the value of an observable called `isViewer$` from an injected `UserService`. Apart from service, we need to inject interactive elements which we would like to disable. In this example, it could be a `MatButton` or `MatSelect`. In case when the button or select object will exist then we could disable it if `isViewer` will be equal to true. Of course, you can inject any type of component or just `ElementRef` and apply the appropriate rule.

Below there is a sample of usage, disabled for viewers will be the second button and select.

```ts
@Component({
  selector: 'ssp-sample',
  template: `
    <button mat-button mat-raised-button>Always available</button>
    <button disableIfViewer mat-button mat-raised-button>Only for editors!</button>
    <mat-select disableIfViewer placeholder="Settings">
      <mat-option value="'setting1'">Setting 1</mat-option>
      <mat-option value="'setting2'">Setting 2</mat-option>
    </mat-select>
  `,
})
export class SampleComponent {}
```

## Conclusions

- **Be more explicit** — attach a directive to an element could be more explicit than putting a condition inside \*ngIf, for example ifNotViewer is much more meaningful/readable than ngIf, it gives you a better answer to what problem would you like to solve in code.
- **Reusability** — directives can be reused across multiple components, whereas assigning conditions to for example ngIf/disabled would require tens of copy/paste and adjustments in templates and components.
- **Logic** — directives can encapsulate more complex logic and control the way elements are added, removed or their behavior is changed.
- **Less defect prone** — taking into account the above points, implementation of the custom directives can be less defect prone.

**Thank you for taking the time to read this article.** I hope it was informative and helpful. If you found the information valuable, please consider following my Twitter [@pawelkubiakdev](https://twitter.com/pawelkubiakdev) accounts for more content like this.
