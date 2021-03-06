import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: any;
  created: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.event = history.state.data;
  }

  update() {
    this.router.navigate(["/update"], { state: { "data": this.event } })
  }
  check() {
    if (this.event.owned == localStorage.getItem('owner'))
      return !!localStorage.getItem('owner');
    else if (localStorage.getItem("userType") == 'admin')
      return !!localStorage.getItem("userType")
  }
}
