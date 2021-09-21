import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    console.log("Registering the User..");
    this._auth.registerUser(this.user)
      .subscribe(
        (data) => {
          console.log("Status:" + data);
        }
      )
    alert("Registration Success! Login to Continue");
    this._router.navigate(['login']);
  }

}
