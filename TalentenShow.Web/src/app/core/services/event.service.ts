import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { TalentEvent } from '../../shared/models/talent-event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllEvents() {
    return this.httpClient.get<Array<TalentEvent>>(`${this.env.apiUrl}/events/all`);
  }

  getAllActiveEvents() {
    return this.httpClient.get<Array<TalentEvent>>(`${this.env.apiUrl}/events/active`);
  }

  getEventById(eventId: number) {
    return this.httpClient.get<TalentEvent>(`${this.env.apiUrl}/events/get/${eventId}`);
  }


}
