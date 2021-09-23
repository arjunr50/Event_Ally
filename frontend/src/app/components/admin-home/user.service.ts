import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  server_address: string = '/api';
  // server_address:string='http://localhost:3000';
  newUser(item: any) {
    return this.http.post(`${this.server_address}/insert`, { "user": item })
      .subscribe(data => { console.log(data) })
  }

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${this.server_address}/users`)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.server_address}/removeUsers/` + id)
  }
  // addUser(author: any) {
  //   return this.http.post("http://localhost:3000/addUser", user)
  //     .subscribe(data => { console.log(data) });
  // }
}
