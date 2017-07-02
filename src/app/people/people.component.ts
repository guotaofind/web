import { Component, OnInit } from '@angular/core';
import { People } from './people';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  providers: [ PeopleService ],
})
export class PeopleComponent implements OnInit {
  errorMessage: string;
  peoples: People[];
  change = false;

  constructor(
    private peopleService: PeopleService
  ) {
  }

  ngOnInit() {
    this.getSexCounts();
  }

  getSexCounts() {
    this.peopleService.getSexCount()
      .subscribe(
        peoples => this.peoples = peoples,
        error =>  this.errorMessage = <any>error);
  }

  onChange() {
    this.change = !this.change;
  }

}
