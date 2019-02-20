import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { WebHomePageComponent } from './web-home-page/web-home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ViewEventPageComponent } from './view-event-page/view-event-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebComponent,
    WebHomePageComponent,
    NewsPageComponent,
    EventPageComponent,
    ViewEventPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [WebComponent]
})
export class WebModule { }
