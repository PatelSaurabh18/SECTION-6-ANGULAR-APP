import { Component } from '@angular/core';
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
  onSubmit(inputValues: {title:string,ticketText:string}){
    // console.dir(titleElement);
    // console.log("SUBMITTED");
    // const title = titleElement.value;
    // console.log(title);
    console.log(inputValues.title);
    console.log(inputValues.ticketText);
  }
}
