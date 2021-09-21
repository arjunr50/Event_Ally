import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../events/event';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth: AuthService,
    private _router: Router, public eventService: EventsService) { }
  search: any;
  nval: EventModel[];
  ngOnInit(): void {
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate([''])
  }
  loggedUser() {
    this._router.navigate(['/books'])
  }
  Search() {
    console.log(this.search);
    this.eventService.searchEvent(this.search)
      .subscribe((data) => {
        this.nval = data;
        this._router.navigate(["/event"], { state: { "data": this.nval } });
      },
        (err) => {
          alert("Event Not Found")
        }
      );

  }
}