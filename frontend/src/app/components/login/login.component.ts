import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup | any;
  // submitted = false;

  constructor(private _auth: AuthService,
    private _router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    // this.loginForm = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', Validators.required],
    // acceptTerms: [false, Validators.requiredTrue]
    //,
    // {
    //     validator: MustMatch('password', 'confirmPassword')
    // }
    //);
  }
  // get f() { return this.loginForm.controls; }
  user = {
    email: '',
    password: ''
  };
  // onReset() {
  //   this.submitted = false;
  //   this.loginForm.reset();
  // }
  validateUserLogin() {
    // this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   alert("invalid")
    //   return;
    // }
    this._auth.validateUserLogin(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          // this.loginOccured.emit(1);
          localStorage.setItem("userType", 'user');
          this._router.navigate(['/userhome']);

        },
        err => {
          console.log(err);
          this._router.navigate(['/userLogin']);
          alert('Invalid Credentials! Please try again!')

        }
      )
    // alert('Successfully Validated! Logging in..')

  }

}
