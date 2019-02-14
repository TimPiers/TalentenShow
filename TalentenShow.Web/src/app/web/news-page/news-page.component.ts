import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../shared/models/news.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  newsId: number;
  news: News;

  constructor(private route: ActivatedRoute,
              private newsService: NewsService) {
    this.route.params.subscribe(params => {
      this.getNews(params['id']);
    });
  }

  ngOnInit() {
    
  }

  getNews(newsId: number) {
    this.newsService.getNewById(newsId).subscribe(news => {
      this.news = news;
    });
  }

}
