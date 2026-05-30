import { Component, input } from '@angular/core';

@Component({
  // selector: 'app-button',
  selector:'button[appButton], a[appButton]',
  /*
  This is -> "Attribute selector"
  Attribute selectors let you use a component on an existing HTML element instead of creating a new custom tag.

  When to use it?
Use attribute selectors when:
You only want to add behavior/styles to an existing element.
You want cleaner DOM.
The component is basically a styled version of a native element (button, input, textarea, etc.).

Simple rule
Need a completely new UI block?
→ Use normal selector (app-user)
Need a styled/enhanced HTML element?
→ Use attribute selector (button[appButton])

*/
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  btnText = input<string>();
  btnSymbol = input<string>();
}
