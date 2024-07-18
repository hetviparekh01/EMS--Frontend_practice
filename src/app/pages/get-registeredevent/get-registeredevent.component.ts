import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-registeredevent',
  templateUrl: './get-registeredevent.component.html',
  styleUrls: ['./get-registeredevent.component.scss']
})
export class GetRegisteredeventComponent implements OnInit {
  rowData!:any;
  colDefs: ColDef[] = [
    { headerName: 'EventName', field: 'eventDetails.eventName', flex: 2 },
    { headerName: 'Booking Date', field: 'createdAt', flex: 2 },
    { headerName: 'Date', field: 'eventDetails.date', flex: 2 },
    { headerName: 'Venue', field: 'eventDetails.venue', flex: 2 },
    { headerName: 'No. of Ticktes', field: 'ticketQuantity', flex: 2 },
    { headerName: 'Price', field: 'eventDetails.price', flex: 2 },
    { headerName: 'Amount Paid', field: 'finalAmt', flex: 2 },
  ];
  constructor(private userService:UserService){}
  ngOnInit(): void {
      this.getAllRegisterEvent()
  }
  getAllRegisterEvent(){
    this.userService.getAllRegisterEvent().subscribe({
      next:(response:any)=>{
        if(response.status){
          this.rowData=response.data
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
}
