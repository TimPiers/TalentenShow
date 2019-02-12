import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { WebHomePageComponent } from './web-home-page/web-home-page.component';

const routes: Routes = [
  {
    path: 'web',
    component: WebComponent,
    children: [
      { path: '', component: WebHomePageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
