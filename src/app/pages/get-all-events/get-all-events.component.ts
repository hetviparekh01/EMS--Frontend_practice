import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { EventService } from 'src/app/core/services/event.service';
import { RegisterService } from 'src/app/core/services/register.service';
import { CustomRendererComponent } from 'src/app/shared/custom-renderer/custom-renderer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-events',
  templateUrl: './get-all-events.component.html',
  styleUrls: ['./get-all-events.component.scss'],
})
export class GetAllEventsComponent implements OnInit {
  rowData: any;
  particularEventData: any;
  isAdmin: boolean = false;
  counter: number = 1;
  colDefs: ColDef[] = [
    { headerName: 'EventName', field: 'eventName', flex: 2 },
    { headerName: 'Description', field: 'description', flex: 2 },
    { headerName: 'Date', field: 'date', flex: 2 },
    { headerName: 'Venue', field: 'venue', flex: 2 },
    { headerName: 'Price', field: 'price', flex: 2 },
    { headerName: 'Capacity', field: 'capacity', flex: 2 },
    {
      headerName: 'Registered User',
      field: 'registeredUser',
      flex: 2,
      hide: this.isAdmin,
    },
    {
      headerName: 'Action',
      field: '',
      flex: 2,
      cellRenderer: CustomRendererComponent,
      cellRendererParams: {
        registerBtn: (id: string) => this.registerBtn(id),
      },
    },
  ];
  constructor(
    private eventService: EventService,
    private registerEventService: RegisterService
  ) { }
  ngOnInit(): void {
    this.getAllEvent();
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  registerBtn(id: string) {
    this.eventService.getEventById(id).subscribe({
      next: (response: any) => {
        this.particularEventData = response.data;
      },
    });
  }
  registerForEvent() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Register it !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerEventService
          .registerEvent({
            eventId: this.particularEventData._id,
            ticketQuantity: this.counter,
          })
          .subscribe({
            next: (response: any) => {
              Swal.fire({
                icon: 'success',
                title: response.message,
                showConfirmButton: false,
                timer: 1500,
              });
              this.getAllEvent()
            },
          });
      }
    });

  }
  getAllEvent() {
    this.eventService.getAllevent().subscribe({
      next: (response: any) => {
        this.rowData = response.data;
      },
    });
  }
} 
