import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  server_address: string = '/api';
  // server_address:string='http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`this.server_address/events`);
  }
  update(item: any) {
    return this.http.post<any>(`this.server_address/update`, { "event": item })
      .subscribe(data => { console.log(data) });
  }
  newEvent(item: any) {
    return this.http.post<any>(`this.server_address/addevent`, { "event": item })
      .subscribe(data => { console.log(data) });
  }
  getO() {
    return localStorage.getItem('owner');
  }
  delEve(item: any) {
    return this.http.post<any>(`this.server_address/dlt`, { "event": item })
      .subscribe(data => { console.log(data) });
  }
  searchEvent(item: any) {

    return this.http.post<any>(`this.server_address/search`, { "event": item });

  }
}
