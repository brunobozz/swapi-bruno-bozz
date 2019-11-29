import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './modules/swapi/components/home/home.component';
import { NotFoundComponent } from './modules/swapi/components/not-found/not-found.component';
import { SwapiMoviesComponent } from './modules/swapi/components/swapi-movies/swapi-movies.component';
import { SwapiPeopleComponent } from './modules/swapi/components/swapi-people/swapi-people.component';
import { SwapiPlanetsComponent } from './modules/swapi/components/swapi-planets/swapi-planets.component';
import { SwapiSpeciesComponent } from './modules/swapi/components/swapi-species/swapi-species.component';
import { SwapiStarshipsComponent } from './modules/swapi/components/swapi-starships/swapi-starships.component';
import { SwapiVehiclesComponent } from './modules/swapi/components/swapi-vehicles/swapi-vehicles.component';

export const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Movies", component: SwapiMoviesComponent },
  { path: "People", component: SwapiPeopleComponent },
  { path: "Planets", component: SwapiPlanetsComponent },
  // { path: "Species", component: SwapiSpeciesComponent },
  // { path: "Starships", component: SwapiStarshipsComponent },
  // { path: "Vehicles", component: SwapiVehiclesComponent },
];

export const routesOther: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routesOther),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
