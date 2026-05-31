import { Component, input, output, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  ticketData = input.required<Ticket>();  
  detailsVisible = signal(false);

  // @Output() close  = new EventEmitter();
  close = output();

  onToggleDetails(){
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible  );
  }
  onMarkComplete(){
      this.close.emit();
  }

}
