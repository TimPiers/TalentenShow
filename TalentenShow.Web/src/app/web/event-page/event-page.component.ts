import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { removeTimeFromDate, calcDateDifferenceInDays } from '../../shared/functions/date-helper.function';
import { TalentEvent } from '../../shared/models/talent-event.model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  activeEvents: TalentEvent[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllActiveEvents().subscribe(events => {
      this.activeEvents = events;
    });
  }

  removeTimeFromDate(date: string) {
    return removeTimeFromDate(date);
  }

  calcDateDifferenceInDays(dateString: string) {
    return calcDateDifferenceInDays(dateString);
  }

}
