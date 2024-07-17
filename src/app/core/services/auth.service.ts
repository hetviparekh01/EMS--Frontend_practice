import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/auth/';
  constructor(private http: HttpClient) {}

  signup(userData: FormData) {
    return this.http.post<any>(`/auth/signup`, userData);
  }
  login(userData: IUser) {
    return this.http.post<any>(`/auth/login`, userData);
  }
}
