import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/services/event.service';
import { TalentEvent } from '../../../shared/models/talent-event.model';
import { removeTimeFromDate } from '../../../shared/functions/date-helper.function';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css', '../events.component.css']
})
export class EventPageComponent implements OnInit {

  private filteredEvents: TalentEvent[];
  private events: TalentEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAllEvents().subscribe(x => {
      this.events = x;
      this.filteredEvents = this.events;
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
