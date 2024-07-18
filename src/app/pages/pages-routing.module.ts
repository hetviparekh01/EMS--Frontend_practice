import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { GetAllEventsComponent } from './get-all-events/get-all-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { GetRegisteredeventComponent } from './get-registeredevent/get-registeredevent.component';
import { AllRegistereventComponent } from './all-registerevent/all-registerevent.component';

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
  },
  {
    path:'viewAllUser',
    component:ViewAllUserComponent
  },
  {
    path:'addUser/:id',
    component:AddUserComponent
  },
  {
    path:'registerEvent',
    component:GetRegisteredeventComponent
  },
  {
    path:'allRegisterEvent',
    component:AllRegistereventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
