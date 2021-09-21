import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  newUser(item: any) {
    return this.http.post("http://localhost:3000/insert", { "user": item })
      .subscribe(data => { console.log(data) })
  }

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get("http://localhost:3000/users")
  }
  deleteUser(id: any) {
    return this.http.delete("http://localhost:3000/removeUsers/" + id)
  }
  // addUser(author: any) {
  //   return this.http.post("http://localhost:3000/addUser", user)
  //     .subscribe(data => { console.log(data) });
  // }
}
