import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Theme } from '../../shared/models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllThemes() {
    return this.httpClient.get<Array<Theme>>(`${this.env.apiUrl}/themes/all`);
  }

  saveTheme(theme: Theme) {
    return this.httpClient.post<Theme>(`${this.env.apiUrl}/themes/save`, theme);
  }

  deleteTheme(theme: Theme) {
    return this.httpClient.post<Theme>(`${this.env.apiUrl}/themes/delete`, theme);
  }
}
