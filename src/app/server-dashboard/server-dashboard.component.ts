import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css',
})
export class ServerDashboardComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  /* if we are writing ogonInit then it is wrong but in terminal and in browser no error will be displayed but the setInterval function
  will never be executed because the ngOnInit is wroong, so it is recommended to implement the OnImit interface so if we are makign any
  typo mistakes the it warns us , so it adds strictness and this is the fature of the TS*/
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999
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
