import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { EventsComponent } from './events/events.component';
import { LocationPageComponent } from './events/location-page/location-page.component';
import { ThemePageComponent } from './events/theme-page/theme-page.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import { ManageParticipantsComponent } from './manage-participants/manage-participants.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminHomePageComponent },
      { path: 'events', component: EventsComponent },
      { path: 'events/event/manage', component: EventPageComponent },
      { path: 'events/location/manage', component: LocationPageComponent },
      { path: 'events/theme/manage', component: ThemePageComponent },
      { path: 'participants', component: ManageParticipantsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
