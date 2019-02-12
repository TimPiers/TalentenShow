import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../shared/models/news.model';

@Component({
  selector: 'app-web-home-page',
  templateUrl: './web-home-page.component.html',
  styleUrls: ['./web-home-page.component.css']
})
export class WebHomePageComponent implements OnInit {

  latestNews: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getLatestNews().subscribe(news => {
      this.latestNews = news;
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

}
