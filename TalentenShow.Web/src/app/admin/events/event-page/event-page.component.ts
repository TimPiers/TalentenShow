import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/services/event.service';
import { TalentEvent } from '../../../shared/models/talent-event.model';
import { removeTimeFromDate } from '../../../shared/functions/date-helper.function';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css', '../events.component.css']
})
export class EventPageComponent implements OnInit {

  form: FormGroup;

  private filteredEvents: TalentEvent[];
  private events: TalentEvent[];

  title: string = "Create Event";

  constructor(private formBuilder: FormBuilder,
    private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAllEvents().subscribe(x => {
      this.events = x;
      this.filteredEvents = this.events;
    });
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

  createNewLocation() {
    this.title = "Create Event";
    this.initForm();
  }

  createUpdateLocation(event: TalentEvent) {
    this.title = "Update Event";
    //this.form = this.formBuilder.group({
    //  "Id": [location.Id],
    //  "Name": [location.Name],
    //  "Adress": [location.Adress],
    //  "PostalCode": [location.PostalCode],
    //  "Place": [location.Place]
    //});
  }

  saveLocation() {
    //if (this.form.controls.Name.pristine || this.form.controls.Adress.pristine
    //  || this.form.controls.PostalCode.pristine || this.form.controls.Place.pristine) {
    //  return;
    //}

    //let event: TalentEvent = this.form.value;
    //if (location.Name.length === 0 || location.Adress.length === 0
    //  || location.PostalCode.length === 0 || location.Place.length === 0) {
    //  return;
    //}
    //this.locationService.saveLocation(location).subscribe(x => {
    //  this.getLocations();
    //});
  }

  deleteLocation(event: TalentEvent) {
    //this.eventService.deleteEvent(event).subscribe(x => {
    //  this.getEvents();
    //});
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

  convertDate(date: string) {
    return removeTimeFromDate(date);
  }

  search(searchValue) {
    this.filteredEvents = this.events.filter(x => x.EventCode.toLowerCase().includes(searchValue.toLowerCase())
      || x.Name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
