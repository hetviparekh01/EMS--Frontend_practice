import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit{
  totalEvents!:number;
  eventRegistered!:number;
  totalUsers!:number;
  totalRegisterdEvents!:number;
  role:string=this.localstorageService.getUserData().role as string
  constructor(private registerService: RegisterService, private localstorageService: LocalstorageService, private eventService: EventService,private userService:UserService
){}
  ngOnInit(): void {
    if(this.role==='user'){
      this.getAllRegisteredEventForUser();
    }else{
      this.getAllUser();
      this.getAllRegisterEvent()
    }
    this.getAllEvent();
  }

  getAllRegisteredEventForUser(){
    this.registerService.getAllRegisteredEventForUser().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.eventRegistered =response.data.length;
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    })
  }
  getAllEvent() {
    this.eventService.getAllevent().subscribe({
      next: (response: any) => {
        if(response.status){
          this.totalEvents = response.data.length;
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    });
  }
  getAllRegisterEvent() {
    this.registerService.getAllRegisterevent().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.totalRegisterdEvents = response.data.length
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    })
  }
  getAllUser(){
    this.userService.getAllUsers().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.totalUsers=response.data.length
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
          });
        }
      },
      error:(error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
        });
      }
    })
  }
}
