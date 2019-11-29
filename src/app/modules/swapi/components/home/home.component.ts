import { Component, OnInit } from "@angular/core";
import { SwapiService } from "./../../services/swapi.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public allPlanets: any = [];

  constructor(private swapiService: SwapiService) {
    this.swapiService.loadAll("planets", "1");
  }

  ngOnInit() {
    this.allPlanets = this.swapiService.allItems;
    // console.log(this.allPlanets);
  }
}
