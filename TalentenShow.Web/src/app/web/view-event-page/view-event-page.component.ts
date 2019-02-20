import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { ActivatedRoute } from '@angular/router';
import { removeTimeFromDate } from '../../shared/functions/date-helper.function';
import { TalentEvent } from '../../shared/models/talent-event.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-event-page',
  templateUrl: './view-event-page.component.html',
  styleUrls: ['./view-event-page.component.css']
})
export class ViewEventPageComponent implements OnInit {

  form: FormGroup;

  talentEvent: TalentEvent;

  subscribeCode: string;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private eventService: EventService) {
    this.route.params.subscribe(params => {
      this.getEvent(params['id']);
    });
    this.initForm();
  }

  ngOnInit() {

  }


  initForm() {
    this.form = this.formBuilder.group({
      "FirstName": [""],
      "Prefix": [""],
      "Lastname": [""],
      "Birthdate": [""]
    });

  }

  getEvent(eventId: number) {
    this.eventService.getEventById(eventId).subscribe(event => {
      this.talentEvent = event;
    });
  }

  subscribeEvent() {
    let eventParticipant = this.form.value;
    eventParticipant.Birthdate = new Date(eventParticipant.Birthdate);
    this.eventService.saveParticipant(eventParticipant, this.talentEvent).subscribe(result => {
      this.subscribeCode = result;
    });
    console.log(eventParticipant);
  }

  removeTime(time: string) {
    return removeTimeFromDate(time);
  }

}
