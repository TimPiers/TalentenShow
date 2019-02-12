import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    BrowserModule,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [WebComponent]
})
export class WebModule { }
