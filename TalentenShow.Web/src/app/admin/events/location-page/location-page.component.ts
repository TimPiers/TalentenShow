import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../core/services/location.service';
import { Location } from '../../../shared/models/location.model';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css', '../events.component.css']
})
export class LocationPageComponent implements OnInit {

  filteredLocations: Location[];
  locations: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getAllLocations().subscribe(x => {
      this.locations = x;
      this.filteredLocations = this.locations;
    });
  }

  search(searchValue) {
    this.filteredLocations = this.locations.filter(x => x.Name.toLowerCase().includes(searchValue.toLowerCase())
      || x.Adress.toLowerCase().includes(searchValue.toLowerCase())
      || x.PostalCode.toLowerCase().includes(searchValue.toLowerCase()));
  }

}
