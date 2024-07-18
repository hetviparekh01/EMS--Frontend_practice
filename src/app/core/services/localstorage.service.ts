import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('accesstoken', token);
  }
  getToken() {
    return localStorage.getItem('accesstoken');
  }
  // setRole(role: string) {
  //   localStorage.setItem('role', role);
  // }
  // getRole() {
  //   return localStorage.getItem('role');
  // }
  // setName(name: string) {
  //   localStorage.setItem('name', name);
  // }
  // getName() {
  //   return localStorage.getItem('name');
  // }
  setUserData(userData:IUser){
    localStorage.setItem('userData',JSON.stringify(userData))
  }
   getUserData(){
     const userData=localStorage.getItem('userData')
     return JSON.parse(userData as string)
  }
  clearLocalstorage() {
    localStorage.clear();
  }
}
