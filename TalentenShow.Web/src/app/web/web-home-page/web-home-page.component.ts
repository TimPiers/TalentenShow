import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../shared/models/news.model';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-web-home-page',
  templateUrl: './web-home-page.component.html',
  styleUrls: ['./web-home-page.component.css']
})
export class WebHomePageComponent implements OnInit {

  latestNews: News;
  activeEvents: Event[];

  constructor(private newsService: NewsService,
              private eventService: EventService) { }

  ngOnInit() {
    this.newsService.getLatestNews().subscribe(news => {
      this.latestNews = news;
    });
    this.eventService.getAllActiveEvents().subscribe(events => {
      this.activeEvents = events;
    });
  }

  shortenDescription(content: string) {
    if (content.length > 75) {
      if (content.substring(74, 75) === " ") {
        return content.substring(0, 74) + "...";
      } else {
        return content.substring(0, 75) + "...";
      }
    } else {
      return content;
    }
  }

  removeTimeFromDate(date: string) {
    return date.substring(0, 10);
  }

  calcDateDifferenceInDays(dateString: string) {
    let date: Date = new Date(dateString);
    let today = new Date();
    let diff: number = Math.abs(date.getTime() - today.getTime());
    let diffDays: number = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }

}
