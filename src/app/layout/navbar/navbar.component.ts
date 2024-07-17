import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name!:string;
  userData:any
  constructor(private localstorageService:LocalstorageService,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.name=this.localstorageService.getName() as string;
    this.getUserById()
  }

  getUserById(){
    this.userService.getUserById().subscribe({
      next:(response:any)=>{
        this.userData=response.data
      }
    })
  }
  logout() {
    console.log("hello");
    this.localstorageService.clearLocalstorage();
    this.router.navigate(['/auth/login'])
  }
}
