import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    WebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
