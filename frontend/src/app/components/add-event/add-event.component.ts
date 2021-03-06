import { Component, OnInit } from '@angular/core';
import { EventModel } from '../events/event';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private eventService: EventsService, private router: Router) { }
  event = new EventModel("", "", "", "", "", "", "", "");
  ngOnInit(): void {
  }
  AddEvent() {
    this.eventService.newEvent(this.event);
    alert("Succcess");
    this.router.navigate(["/events"]);
  }
}
