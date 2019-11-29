import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";
import { SwapiService } from "./../../../services/swapi.service";

@Component({
  selector: "app-modal-movies",
  templateUrl: "./modal-movies.component.html",
  styleUrls: ["./modal-movies.component.scss"]
})
export class ModalMoviesComponent implements OnInit {
  public moviePeople: any = [];
  public moviePlanets: any = [];
  public movieStarships: any = [];
  public movieVehicles: any = [];
  public movieSpecies: any = [];

  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: [];
  planets: [];
  starships: [];
  vehicles: [];
  species: [];

  constructor(
    public bsModalRef: BsModalRef,
    private swapiService: SwapiService
  ) { }

  ngOnInit() {
    this.characters.forEach(async e => {
      let peolple = await this.swapiService.dynamicRequest(e).toPromise();
      this.moviePeople.push(peolple);
    });

    this.planets.forEach(async e => {
      let planet = await this.swapiService.dynamicRequest(e).toPromise();
      this.moviePlanets.push(planet);
    });

    this.starships.forEach(async e => {
      let starship = await this.swapiService.dynamicRequest(e).toPromise();
      this.movieStarships.push(starship);
    });

    this.vehicles.forEach(async e => {
      let vehicle = await this.swapiService.dynamicRequest(e).toPromise();
      this.movieVehicles.push(vehicle);
    });

    this.characters.forEach(async e => {
      let specie = await this.swapiService.dynamicRequest(e).toPromise();
      this.movieSpecies.push(specie);
    });
  }

}
