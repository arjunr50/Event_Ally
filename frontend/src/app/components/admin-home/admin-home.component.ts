import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';

import { AuthGuard } from '../../services/auth.guard';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],

})
export class AdminHomeComponent implements OnInit {
  title: String = "User List";
  //Product  is the model class for product item  
  users: User[] | any;
  document: any;
  //creating service object for calling getProducts()
  constructor(private userService: UserService, public _auth: AuthService,
    private _router: Router) { }
  toggleImage(): void {

  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe((data) => {
      this.users = JSON.parse(JSON.stringify(data));
    })
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user._id)
      .subscribe(data => {
        this.users = this.users.filter((u: User) => u !== user);
        window.location.reload();
      })
  };
  // reloadCurrentPage() {
  //   window.location.reload();
  // }
  // addUser() {
  //   this.userService.addUser(this.users);
  //   console.log("SUCCESS!");
  //   // this.router.navigate(['users']);
  // }
}