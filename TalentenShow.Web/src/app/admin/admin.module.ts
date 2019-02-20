import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { ThemePageComponent } from './events/theme-page/theme-page.component';
import { LocationPageComponent } from './events/location-page/location-page.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import { EventsComponent } from './events/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageParticipantsComponent } from './manage-participants/manage-participants.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHomePageComponent,
    ThemePageComponent,
    LocationPageComponent,
    EventPageComponent,
    EventsComponent,
    ManageParticipantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
