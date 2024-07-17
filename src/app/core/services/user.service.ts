import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserById() {
    return this.http.get<any>(`/user/getUserById`);
  }
  getAllUsers(){
    return this.http.get<any>(`/user/getAllUser`)
  }
}
 