import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { GetAllEventsComponent } from './get-all-events/get-all-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:DashboadComponent
  },
  {
    path:'viewAllEvents',
    component:GetAllEventsComponent
  },
  {
    path:'addEvent',
    component:AddEventComponent
  },
  {
    path:'addUser',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
