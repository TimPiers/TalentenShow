import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SessionStorageService } from './services/session-storage.service';
import { NewsService } from './services/news.service';
import { BaseService } from './services/base.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BaseService,
    NewsService,
    SessionStorageService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
