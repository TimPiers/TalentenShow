import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Location } from '../../shared/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAllLocations() {
    return this.httpClient.get<Array<Location>>(`${this.env.apiUrl}/locations/all`);
  }

  saveLocation(location: Location) {
    return this.httpClient.post<Location>(`${this.env.apiUrl}/locations/save`, location);
  }

  deleteLocation(location: Location) {
    return this.httpClient.post<Location>(`${this.env.apiUrl}/locations/delete`, location);
  }
}
