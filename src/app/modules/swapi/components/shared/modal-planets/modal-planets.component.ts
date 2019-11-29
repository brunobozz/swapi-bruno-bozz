import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";
import { SwapiService } from "./../../../services/swapi.service";

@Component({
  selector: "app-modal-planets",
  templateUrl: "./modal-planets.component.html",
  styleUrls: ["./modal-planets.component.scss"]
})
export class ModalPlanetsComponent implements OnInit {
  planetResidents: any = [];
  planetFilms: any = [];

  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [];
  films: [];
  created: string;
  edited: string;

  constructor(
    public bsModalRef: BsModalRef,
    private swapiService: SwapiService
  ) {}

  ngOnInit() {
    this.residents.forEach(async e => {
      let resident = await this.swapiService.dynamicRequest(e).toPromise();
      this.planetResidents.push(resident);
    });

    this.films.forEach(async e => {
      let film = await this.swapiService.dynamicRequest(e).toPromise();
      this.planetFilms.push(film);
    });
  }
}
