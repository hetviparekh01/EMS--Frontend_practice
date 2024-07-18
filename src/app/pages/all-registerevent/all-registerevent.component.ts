import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { RegisterService } from 'src/app/core/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-registerevent',
  templateUrl: './all-registerevent.component.html',
  styleUrls: ['./all-registerevent.component.scss']
})
export class AllRegistereventComponent {
  rowData!: any;
  colDefs: ColDef[] = [
    { headerName: 'User Name', field: 'userDetails.userName', flex: 2 },
    { headerName: 'EventName', field: 'eventDetails.eventName', flex: 2 },
    { headerName: 'Booking Date', field: 'createdAt', flex: 2 },
    { headerName: 'Date', field: 'eventDetails.date', flex: 2 },
    { headerName: 'No. of Ticktes', field: 'ticketQuantity', flex: 2 },
    { headerName: 'Amount Paid', field: 'finalAmt', flex: 2 },
  ];
  constructor(private regiserService: RegisterService) { }
  ngOnInit(): void {
    this.getRegisterEvent()
  }
  getRegisterEvent() {
    this.regiserService.getAllRegisterevent().subscribe({
      next: (response: any) => {
        if (response.status) {
          this.rowData = response.data
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
          });
        }
      },
      error:(error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      }
    })
  }
}
