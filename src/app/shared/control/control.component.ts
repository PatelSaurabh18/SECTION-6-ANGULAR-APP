import { Component, input, ViewEncapsulation ,OnInit, computed, HostBinding, HostListener, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
     class:'control',
      '(click)':'onClick()'
  }
        // it can be used in place of @hostListener -> "'(click)':'onClick()'"

  
})
export class ControlComponent implements OnInit {

  // @HostBinding('class') className = 'control';
  /*
  now instead of using this host we can use @HostBinding('class) className = 'control'
  here className is just a placeHolder abnd 'class' is the actual name which will be taken from here by angualr
  but it was a old way to it is discouraged to not use this insted use the host one 
  Same for @HostListender -> Angular teams rcdomends to use the host approach for @HostBinding and @HostListener both
  */

  // @HostListener('click') onClick(){
  //   console.log("clicked!");
    
  // }

  label = input<string>();

  // labelFor = computed(()=> this.label()?.toLowerCase() ?? '');

  labelFor = this.label();

  ngOnInit() {
    this.labelFor = this.label()?.toLowerCase() ?? '';
    console.log(this.labelFor);
  }

  private el = inject(ElementRef);
  
  onClick(){
    console.log("Clicked!");
    // will be used when we use it with host not with HostListener
      console.log(this.el);
  }
}