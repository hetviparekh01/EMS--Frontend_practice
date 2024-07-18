import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterEvent } from '../interfaces/IRegisterEvent';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  apiUrl = 'http://localhost:3000/register/';
  constructor(private http: HttpClient) {}
  registerEvent(registerEventData:IRegisterEvent) {
    return this.http.post<any>(`/register/registerEvent`,registerEventData);
  }
  getAllRegisteredEventForUser(){
    return this.http.get<any>(`/register/getAllRegisteredEventForUser`)
  }
  getAllRegisterevent(){
    return this.http.get<any>(`/register/registerEvent`)
  }
}
