import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserById(id:string) {
    return this.http.get<any>(`/user/getUserById/${id}`);
  }
  getAllUsers(){
    return this.http.get<any>(`/user/getAllUser`)
  }
  deleteUser(id:string){
    return this.http.delete<any>(`/user/deleteUser/${id}`)
  }
  updateUser(id:string,userData:FormData){
    return this.http.put<any>(`/user/updateUser/${id}`,userData)
  }
  getAllRegisterEvent(){
    return this.http.get<any>(`/user/registerEvent`)
  }
}
 