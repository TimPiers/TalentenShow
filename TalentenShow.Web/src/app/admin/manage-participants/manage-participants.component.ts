import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../core/services/person.service';
import { removeTimeFromDate } from '../../shared/functions/date-helper.function';

@Component({
  selector: 'app-manage-participants',
  templateUrl: './manage-participants.component.html',
  styleUrls: ['./manage-participants.component.css']
})
export class ManageParticipantsComponent implements OnInit {

  filteredPersons: any[];
  persons: any[];

  selectedPerson: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getAllPersons().subscribe(res => {
      this.persons = res;
      this.filteredPersons = this.persons;
    });
  }

  search(searchValue) {
    this.filteredPersons = this.persons.filter(x => x.FirstName.toLowerCase().includes(searchValue.toLowerCase())
      || x.LastName.toLowerCase().includes(searchValue.toLowerCase()));
  }

  showPerson(person: any) {
    this.selectedPerson = person;
  }

  convertDate(date: string) {
    return removeTimeFromDate(date);
  }

}
