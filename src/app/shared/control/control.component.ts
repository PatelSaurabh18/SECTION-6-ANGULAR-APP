import { Component, input, ViewEncapsulation ,OnInit, computed } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
     class:'control'
  }
  // Yes — with encapsulation: NONE, using :host can lead to CSS conflicts and unpredictable overrides, so you must rely on strict class naming or avoid global styling conflicts.
})
export class ControlComponent implements OnInit {
  
  label = input<string>();

  // labelFor = computed(()=> this.label()?.toLowerCase() ?? '');

  labelFor = this.label();

  ngOnInit() {
    this.labelFor = this.label()?.toLowerCase() ?? '';
    console.log(this.labelFor);
  }
}