import { Component } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css',
})
export class ServerDashboardComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000);
  }
  /*
  it is advised to keep the constructor lean, so constructor is used when we want to pereform a task during creation  of a class
  whereas ngOnInit is used when "change detection" happens so it "rund after the angular has initialized all the component's input"
  */
}
