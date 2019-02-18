import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { removeTimeFromDate } from '../../shared/functions/date-helper.function';
import { TalentEvent } from '../../shared/models/talent-event.model';

@Component({
  selector: 'app-view-event-page',
  templateUrl: './view-event-page.component.html',
  styleUrls: ['./view-event-page.component.css']
})
export class ViewEventPageComponent implements OnInit {

  talentEvent: TalentEvent;

  constructor(private route: ActivatedRoute,
    private eventService: EventService) {
    this.route.params.subscribe(params => {
      this.getEvent(params['id']);
    });
  }

  ngOnInit() {

  }

  getEvent(eventId: number) {
    this.eventService.getEventById(eventId).subscribe(event => {
      this.talentEvent = event;
    });
  }

  subscribeEvent() {
    alert("Aanmelden voor: " + this.talentEvent.EventCode);
  }

  removeTime(time: string) {
    return removeTimeFromDate(time);
  }

}
