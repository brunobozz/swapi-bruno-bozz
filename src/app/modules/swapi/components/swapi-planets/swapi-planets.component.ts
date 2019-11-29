import { Component, OnInit } from "@angular/core";
import { SwapiService } from "./../../services/swapi.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalPlanetsComponent } from "../shared/modal-planets/modal-planets.component";

@Component({
  selector: "app-swapi-planets",
  templateUrl: "./swapi-planets.component.html",
  styleUrls: ["./swapi-planets.component.scss"]
})
export class SwapiPlanetsComponent implements OnInit {
  
  public allPlanets: any = [];
  bsModalRef: BsModalRef;

  constructor(
    private swapiService: SwapiService,
    private modalService: BsModalService
  ) {
    this.swapiService.loadAll("planets", "1");
  }

  ngOnInit() {
    this.allPlanets = [];
    this.allPlanets = this.swapiService.allPlanets;
  }

  showPlanet(planet: string) {
    let initialState = this.allPlanets.find(e => e.url === planet);
    this.bsModalRef = this.modalService.show(ModalPlanetsComponent, Object.assign({initialState}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.closeBtnName = "Close";
  }
}
