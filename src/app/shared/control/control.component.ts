import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ControlComponent {
  label = input<string>();

  labelFor = 'title';

  constructor() {
    this.labelFor = this.label()?.toLowerCase() ?? '';
    console.log(this.labelFor);
  }
}
