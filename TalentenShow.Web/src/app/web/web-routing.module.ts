import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { WebHomePageComponent } from './web-home-page/web-home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  {
    path: 'web',
    component: WebComponent,
    children: [
      { path: '', component: WebHomePageComponent },
      { path: 'news/:id', component: NewsPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
