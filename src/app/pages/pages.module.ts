import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { SharedModule } from '../shared/shared.module';
import { GetAllEventsComponent } from './get-all-events/get-all-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { GetRegisteredeventComponent } from './get-registeredevent/get-registeredevent.component';
import { AllRegistereventComponent } from './all-registerevent/all-registerevent.component';


@NgModule({
  declarations: [
    DashboadComponent,
    GetAllEventsComponent,
    AddEventComponent,
    AddUserComponent,
    ViewAllUserComponent,
    GetRegisteredeventComponent,
    AllRegistereventComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
