import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  eventForm!:FormGroup
  constructor(private fb:FormBuilder,private eventService:EventService,private router:Router){}
  ngOnInit(): void {
   this.eventForm=this.fb.group({
      eventName:['',Validators.compose([Validators.required])],
      description:['',Validators.compose([Validators.required])],
      date:['',Validators.compose([Validators.required])],
      venue:['',Validators.compose([Validators.required])],
      capacity:['',Validators.compose([Validators.required])],
      price:['',Validators.compose([Validators.required])],
   })
  }

onSubmit() {
  console.log(this.eventForm.value);
  if(this.eventForm.valid){
    this.eventService.addEvent(this.eventForm.value).subscribe({
      next:(response:any)=>{
        if(response){
          Swal.fire({
            icon: "success",
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          });
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
      },
      complete:()=>{
        this.eventForm.reset();
        this.router.navigate(['/viewAllEvents'])
      }
    })
  }
}
}
