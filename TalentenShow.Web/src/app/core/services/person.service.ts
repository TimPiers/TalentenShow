import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { TalentEvent } from '../../shared/models/talent-event.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllPersons() {
    return this.httpClient.get<Array<any>>(`${this.env.apiUrl}/participant/all`);
  }

  
}
