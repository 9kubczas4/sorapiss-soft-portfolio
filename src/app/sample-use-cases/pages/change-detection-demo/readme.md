## Change Detection Demo

In Angular, change detection refers to the process of identifying changes in the component's data and updating the view to reflect those changes. Angular uses a unidirectional data flow, where data flows from the component class to the template. When the data in the component class changes, Angular's change detection mechanism automatically detects those changes and updates the view accordingly.

The change detection process in Angular can be divided into two phases:

The first phase is the template update phase. In this phase, Angular performs a top-down traversal of the component's view hierarchy to update the bindings and directives in the template. Angular updates the view by updating the DOM with the new values.

The second phase is the change detection phase. In this phase, Angular checks the component's data for any changes. Angular compares the current value of each data property with its previous value. If a change is detected, Angular marks the component as "dirty" and initiates a new round of change detection to update the view with the new data values.

There are two types of change detection strategies in Angular:

- Default change detection: In this strategy, Angular checks the component's data for changes every time an event is fired or an asynchronous operation completes.

- OnPush change detection: In this strategy, Angular checks the component's data for changes only when the input data changes, or when an event is fired explicitly. This strategy is more performant because it reduces the number of change detection cycles that Angular has to perform.

To summarize, Angular's change detection mechanism automatically detects changes in the component's data and updates the view accordingly, providing a seamless user experience.

## Sources

- https://blog.simplified.courses/angular-change-detection-cheat-sheet-explained/
