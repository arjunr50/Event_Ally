import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../events/event';
import { User } from '../admin-home/user.model';
import { UserService } from '../admin-home/user.service';
import { AuthGuard } from '../../services/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[] | any;
  document: any;

  constructor(private userService: UserService, public _auth: AuthService,
    private _router: Router, public eventService: EventsService) { }
  search: any;
  public name: any;
  nval: EventModel[];
  ngOnInit(): void {
    this.name = localStorage.getItem('owner');
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['']);
    localStorage.removeItem('owner');
  }
  loggedUser() {
    this._router.navigate(['/userhome'])
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
