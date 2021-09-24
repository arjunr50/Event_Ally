import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl: string = '/api';
  // private _loginUrl = "http://localhost:3000/";

  registerUser(user: User) {
    return this.http.post<any>(`${this._loginUrl}/register`, user);
  }
  validateUser(user: any) {
    return this.http.post<any>(`${this._loginUrl}/adminLogin`, user);
  }
  validateUserLogin(user: any) {
    return this.http.post<any>(`${this._loginUrl}/login`, user);
  }

  constructor(private http: HttpClient) { }
  loginUser(user: any) {
    return this.http.post<any>(`${this._loginUrl}/login`, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
