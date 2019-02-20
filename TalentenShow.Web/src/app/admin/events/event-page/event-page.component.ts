import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/services/event.service';
import { TalentEvent } from '../../../shared/models/talent-event.model';
import { removeTimeFromDate } from '../../../shared/functions/date-helper.function';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LocationService } from 'src/app/core/services/location.service';
import { Location } from 'src/app/shared/models/location.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Theme } from 'src/app/shared/models/theme.model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css', '../events.component.css']
})
export class EventPageComponent implements OnInit {

  form: FormGroup;

  filteredEvents: TalentEvent[];
  events: TalentEvent[];
  locations: Location[];
  themes: Theme[];

  title: string = "Create Event";

  constructor(private formBuilder: FormBuilder,
    private locationService: LocationService,
    private themeService: ThemeService,
    private eventService: EventService) { }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(result => {
      this.locations = result;
    });
    this.themeService.getAllThemes().subscribe(result => {
      this.themes = result;
    });
    this.getEvents();
    this.initForm();
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
      "EventCode": [""],
      "Description": [""],
      "EntryStartDate": [""],
      "EntryEndDate": [""],
      "EventStartDate": [""],
      "EventEndDate": [""],
      "LocationId": [null],
      "ThemeId": [null]
    });

  }

  createNewEvent() {
    this.title = "Create Event";
    this.initForm();
  }

  createUpdateLocation(event: TalentEvent) {
    this.title = "Update Event";
    this.form = this.formBuilder.group({
      "Id": [event.Id],
      "Name": [event.Name],
      "EventCode": [event.EventCode],
      "Description": [event.Description],
      "EntryStartDate": [this.convertDate(event.EntryStartDate.toString())],
      "EntryEndDate": [this.convertDate(event.EntryEndDate.toString())],
      "EventStartDate": [this.convertDate(event.EventStartDate.toString())],
      "EventEndDate": [this.convertDate(event.EventEndDate.toString())],
      "LocationId": [event.LocationId],
      "ThemeId": [event.ThemeId]
    });
  }

  saveEvent() {
    let event: TalentEvent = this.form.value;
    console.log(event);
    if (!event.Name || !event.Description || !event.EntryEndDate || !event.EntryStartDate || !event.EventCode
      || !event.EventEndDate || !event.EventStartDate || event.LocationId.toString() === "null" || event.ThemeId.toString() === "null") {
      return;
    }

    this.eventService.saveEvent(event).subscribe(x => {
      this.getEvents();
    });
  }

  deleteEvent(event: TalentEvent) {
    this.eventService.deleteEvent(event).subscribe(x => {
      this.getEvents();
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

  convertDate(date: string) {
    return removeTimeFromDate(date);
  }

  search(searchValue) {
    this.filteredEvents = this.events.filter(x => x.EventCode.toLowerCase().includes(searchValue.toLowerCase())
      || x.Name.toLowerCase().includes(searchValue.toLowerCase()));
  }
}
