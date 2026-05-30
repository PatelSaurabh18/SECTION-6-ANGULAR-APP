import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { TicketComponent } from './dashboard/tickets/ticket/ticket.component';
import { ServerDashboardComponent } from './server-dashboard/server-dashboard.component';
import { TrafficDashboardComponent } from './traffic-dashboard/traffic-dashboard.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
@Component({

  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,TicketsComponent,ServerDashboardComponent,TrafficDashboardComponent,DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
