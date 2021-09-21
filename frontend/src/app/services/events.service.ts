import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get("http://localhost:3000/events");
  }
  update(item: any) {
    return this.http.post<any>("http://localhost:3000/update", { "event": item })
      .subscribe(data => { console.log(data) });
  }
  newEvent(item: any) {
    return this.http.post<any>("http://localhost:3000/addevent", { "event": item })
      .subscribe(data => { console.log(data) });
  }
  getO() {
    return localStorage.getItem('owner');
  }
  delEve(item: any) {
    return this.http.post<any>("http://localhost:3000/dlt", { "event": item })
      .subscribe(data => { console.log(data) });
  }
  searchEvent(item: any) {

    return this.http.post<any>("http://localhost:3000/search", { "event": item });

  }
}
