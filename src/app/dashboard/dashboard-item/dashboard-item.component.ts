import { Component, Input,input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation:ViewEncapsulation.None,
  // host:{
  //   class:'dashboard-item'
  // }
    /*
    this host will not totally replace a property defined in template because angular only knows the things(elements) defined/used in template
    so if we are adding the class using host then because the scope if till the template file so this new added property using 
    host won't work be default, so either we can use encapsulation=NONE or the old style using ":host"   and we don't even need this host object here
    */
  
})
export class DashboardItemComponent {

  // @Input({required:true}) image!: {src:string,alt:string};
  // @Input({required:true}) title!: string;

  image = input.required<{src:string,alt:string}>();
  title = input.required<string>();
}
