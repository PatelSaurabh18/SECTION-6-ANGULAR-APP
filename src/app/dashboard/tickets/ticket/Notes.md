# ⚡ Angular Inputs & Outputs: Decorators vs. Signal Functions

## 📥 1. Inputs: `@Input()` vs `input()` Signal

### ⚙️ Configurable Features Matrix


| Feature | Legacy `@Input()` Decorator | Modern `input()` Signal Function |
| :--- | :--- | :--- |
| **Alias** | Passed directly: `@Input('customName')` | Config object: `input(default, { alias: 'customName' })` |
| **Required** | Config object: `@Input({ required: true })` | Chain method: `input.required<Type>()` |
| **Transform** | Config object: `@Input({ transform: booleanAttribute })` | Config object: `input(default, { transform: trimFn })` |

---

### 📦 Configurable Data Explanations (Inputs)

#### 1. Alias
* **What it does:** Allows you to use a different property name in the parent HTML template than the variable name used inside your TypeScript code class.
* **Decorator Syntax:** `@Input('publicName') privateName!: string;`
* **Signal Syntax:** `privateName = input('defaultValue', { alias: 'publicName' });`
* **Template Usage:** `<app-child [publicName]="data"></app-child>`

#### 2. Required
* **What it does:** Enforces a compile-time error if the parent component forgets to pass a value to this specific input property.
* **Decorator Syntax:** `@Input({ required: true }) userId!: string;`
* **Signal Syntax:** `userId = input.required<string>();` *(Note: Required signals have no default value)*

#### 3. Transform
* **What it does:** Automatically manipulates or formats the data incoming from the parent *before* it gets assigned to your local variable.
* **Common Use Case:** Converting a string input like `"true"` into a real boolean value `true`, or converting an input string into a number.
* **Decorator Syntax:** `@Input({ transform: booleanAttribute }) disabled = false;`
* **Signal Syntax:** `disabled = input(false, { transform: booleanAttribute });`

---

## 📤 2. Outputs: `@Output()` vs `output()` Function

### ⚙️ Configurable Features Matrix


| Feature | Legacy `@Output()` Decorator | Modern `output()` Function |
| :--- | :--- | :--- |
| **Alias** | Passed directly: `@Output('customEvent')` | Config object: `output({ alias: 'customEvent' })` |
| **Required** | ❌ Not supported | ❌ Not supported *(Outputs are always operational)* |
| **Transform** | ❌ Not supported | ❌ Not supported *(Format payloads before calling `.emit()`)* |

---

### 📦 Configurable Data Explanations (Outputs)

#### 1. Alias
* **What it does:** Changes the event emitter name exposed to the parent component template.
* **Decorator Syntax:** `@Output('publicEvent') privateEvent = new EventEmitter<string>();`
* **Signal Syntax:** `privateEvent = output<string>({ alias: 'publicEvent' });`
* **Template Usage:** `<app-child (publicEvent)="handleEvent($event)"></app-child>`

---

## 🧪 Production Code Comparison Example

### ❌ Old School Approach (Decorators)
```ts
import { Component, Input, Output, EventEmitter, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-legacy-card',
  standalone: true,
  template: `<button [disabled]="disabled" (click)="save.emit()">Action</button>`
})
export class LegacyCardComponent {
  // Required input with an alias
  @Input({ required: true, alias: 'cardId' }) id!: string;

  // Input with a built-in transformation function
  @Input({ transform: booleanAttribute }) disabled = false;

  // Custom aliased event emitter
  @Output('onSave') save = new EventEmitter<void>();
}
```

### ✅ Modern Approach (Signal Inputs & Native Outputs)
```ts
import { Component, input, output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-modern-card',
  standalone: true,
  template: `<button [disabled]="disabled()" (click)="save.emit()">Action</button>`
})
export class ModernCardComponent {
  // Required signal input with an alias
  id = input.required<string>({ alias: 'cardId' });

  // Signal input with a transformation function
  disabled = input(false, { transform: booleanAttribute });

  // Native signal-aligned output function with an alias
  save = output<void>({ alias: 'onSave' });
}
```

---

## 🎯 Summary Rule
* Use **`alias`** to keep internal variable naming clean while meeting strict external naming standards.
* Use **`required`** to catch missing data bindings instantly during application builds.
* Use **`transform`** to clean up types (like casting HTML strings into numbers/booleans) seamlessly.

🔥 **One-Line Memory Trick:** *"Signals config properties via parameter objects `{}` or chaining `.required()`, whereas decorators pass everything through a centralized configuration metadata block."*
