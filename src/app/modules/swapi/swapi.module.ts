import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//COMPONENTS
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SwapiMoviesComponent } from "./components/swapi-movies/swapi-movies.component";
import { SwapiPlanetsComponent } from "./components/swapi-planets/swapi-planets.component";
import { SwapiSpeciesComponent } from "./components/swapi-species/swapi-species.component";
import { SwapiStarshipsComponent } from "./components/swapi-starships/swapi-starships.component";
import { SwapiVehiclesComponent } from "./components/swapi-vehicles/swapi-vehicles.component";
import { SwapiPeopleComponent } from './components/swapi-people/swapi-people.component';

//MODALS
import { ModalMoviesComponent } from './components/shared/modal-movies/modal-movies.component';
import { ModalPlanetsComponent } from './components/shared/modal-planets/modal-planets.component';

//SERVICES
import { SwapiService } from './services/swapi.service';

const COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
  SwapiMoviesComponent,
  SwapiPeopleComponent,
  SwapiPlanetsComponent,
  SwapiSpeciesComponent,
  SwapiStarshipsComponent,
  SwapiVehiclesComponent,
  ModalPlanetsComponent
];

const MODALS = [
  ModalMoviesComponent,
  ModalPlanetsComponent,
]

const SERVICES = [
  SwapiService
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS],
  entryComponents: [...MODALS],
  providers:[...SERVICES]
})
export class SwapiModule {}
