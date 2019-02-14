import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { WebHomePageComponent } from './web-home-page/web-home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [
    WebComponent,
    WebHomePageComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [WebComponent]
})
export class WebModule { }
