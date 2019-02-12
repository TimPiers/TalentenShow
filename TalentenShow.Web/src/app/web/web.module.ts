import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { WebHomePageComponent } from './web-home-page/web-home-page.component';

@NgModule({
  declarations: [
    WebComponent,
    WebHomePageComponent
  ],
  imports: [
    BrowserModule,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [WebComponent]
})
export class WebModule { }
