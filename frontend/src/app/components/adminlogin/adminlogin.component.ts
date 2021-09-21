import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  name = new FormControl('');
  constructor(private _auth: AuthService,
    private _router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  user = {
    email: '',
    password: ''
  };
  validateUser() {
    this._auth.validateUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem("userType", 'admin')
          this._router.navigate(['/adminhome'])
        },
        err => {
          console.log(err);
          this._router.navigate(['/adminhome'])
        }
      )
  }

}