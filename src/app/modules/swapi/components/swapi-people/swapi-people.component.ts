import { Component } from '@angular/core';
import { SwapiService } from './../../services/swapi.service';

@Component({
  selector: 'app-swapi-people',
  templateUrl: './swapi-people.component.html',
  styleUrls: ['./swapi-people.component.scss']
})
export class SwapiPeopleComponent {

  public swapiPeople: any = [];

  constructor(
    private swapiService: SwapiService
  ) { 
    this.people('1')
  }

  people(page: string) {
    this.swapiService.swapi('people','json', page)
      .subscribe((response: any) => {
        this.swapiPeople = response;
        this.swapiPeople.results.forEach(async element => {

          let number = element.url.split("/");
          element.url = number[5];

          let home = element.homeworld;
          element.homeworld = '';
          element.homeworld = await this.swapiService.dynamicRequest(home).toPromise();

          let specie = element.species[0];
          element.species = '';
          element.species = await this.swapiService.dynamicRequest(specie).toPromise();
        });
      });
  }

}
