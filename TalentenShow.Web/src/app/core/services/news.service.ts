import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { News } from '../../shared/models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllNews() {
    return this.httpClient.get<Array<News>>(`${this.env.apiUrl}/news/all`);
  }

  getLatestNews() {
    return this.httpClient.get<News>(`${this.env.apiUrl}/news/latest`);
  }

  getNewById(newsId: number) {
    return this.httpClient.get<News>(`${this.env.apiUrl}/news/get/${newsId}`);
  }

}
