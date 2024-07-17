import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.scss']
})
export class DashboadComponent implements OnInit{
  totalEvents!:number;
  eventRegistered!:number;
  totalUsers!:number;
  role:string=this.localstorageService.getRole() as string
  constructor(private registerService: RegisterService, private localstorageService: LocalstorageService, private eventService: EventService,private userService:UserService
){}
  ngOnInit(): void {
    this.getAllRegisteredEventForUser();
    this.getAllEvent();
    // this.getAllUser();
  }

  getAllRegisteredEventForUser(){
    this.registerService.getAllRegisteredEventForUser().subscribe({
      next:(response:any)=>{
        this.eventRegistered =response.data.length;
      }
    })
  }
  getAllEvent() {
    this.eventService.getAllevent().subscribe({
      next: (response: any) => {
        this.totalEvents = response.data.length;
      },
    });
  }

  getAllUser(){
    this.userService.getAllUsers().subscribe({
      next:(response:any)=>{
        console.log(response);
        // this.totalUsers=response.data.length
      }
    })
  }
}
