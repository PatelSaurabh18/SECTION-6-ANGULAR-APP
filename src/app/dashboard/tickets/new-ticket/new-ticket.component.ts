import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { log } from 'node:console';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  /* @ViewChildren(ButtonComponent) buttons!: ElementRef<HTMLFormElement>;
    this is used when we want to consume more than 1 Template Variables of same type so we will be having an array of 
    ButtonComponent type , and this viewChild fn is added in angular 17.3
  */

    private form  = viewChild.required<ElementRef<HTMLFormElement>>('form');


  onSubmit(inputValues: {title:string,ticketText:string}){
    console.log(inputValues.title);
    console.log(inputValues.ticketText);
    // this.form?.nativeElement.reset();
    this.form()?.nativeElement.reset()
  }
}
