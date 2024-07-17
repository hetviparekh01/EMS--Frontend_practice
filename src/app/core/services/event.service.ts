import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/IEvent';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  apiUrl = 'http://localhost:3000/event/';
  constructor(private http: HttpClient) {}
  getAllevent() {
    return this.http.get<any>(`/event/getAllEvent`);
  }
  getEventById(id:string){
    return this.http.get(`/event/getEventById/${id}`);
  }
  addEvent(eventData:IEvent){
    return this.http.post<any>(`/event/addEvent`,eventData)
  }
}
