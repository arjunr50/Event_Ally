import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  event: any;
  constructor(private eventService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.event = history.state.data;
  }
  updateEvent() {
    this.eventService.update(this.event);
    alert("Updated")
    this.router.navigate(["/events"])
  }
  DelEvent() {
    this.eventService.delEve(this.event);
    alert("Deleted");
    this.router.navigate(["/events"]);
  }
}