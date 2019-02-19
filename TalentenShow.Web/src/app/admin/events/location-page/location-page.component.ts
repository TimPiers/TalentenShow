import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../core/services/location.service';
import { Location } from '../../../shared/models/location.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Theme } from '../../../shared/models/theme.model';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css', '../events.component.css']
})
export class LocationPageComponent implements OnInit {

  form: FormGroup;

  filteredLocations: Location[];
  locations: Location[];

  title: string = "Create Location";

  constructor(private formBuilder: FormBuilder,
    private locationService: LocationService) {
      this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      "Id": [0],
      "Name": [""],
      "Adress": [""],
      "PostalCode": [""],
      "Place": [""]
    });

  }

  ngOnInit() {
    this.getLocations();
  }

  createNewLocation() {
    this.title = "Create Location";
    this.initForm();
  }

  createUpdateLocation(location: Location) {
    this.title = "Update Location";
    this.form = this.formBuilder.group({
      "Id": [location.Id],
      "Name": [location.Name],
      "Adress": [location.Adress],
      "PostalCode": [location.PostalCode],
      "Place": [location.Place]
    });
  }

  saveLocation() {
    if (this.form.controls.Name.pristine || this.form.controls.Adress.pristine
      || this.form.controls.PostalCode.pristine || this.form.controls.Place.pristine) {
      return;
    }

    let location: Location = this.form.value;
    if (location.Name.length === 0 || location.Adress.length === 0
      || location.PostalCode.length === 0 || location.Place.length === 0) {
      return;
    }
    this.locationService.saveLocation(location).subscribe(x => {
      this.getLocations();
    });
  }

  deleteLocation(location: Location) {
    this.locationService.deleteLocation(location).subscribe(x => {
      this.getLocations();
    });
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
