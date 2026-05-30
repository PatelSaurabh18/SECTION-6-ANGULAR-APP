import { Component } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css'
})
export class ServerDashboardComponent {
  currentStatus = 'online';

}
