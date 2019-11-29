import { Component, OnInit } from '@angular/core';
import { SwapiService } from "./../../services/swapi.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalMoviesComponent } from '../shared/modal-movies/modal-movies.component';

@Component({
  selector: 'app-swapi-movies',
  templateUrl: './swapi-movies.component.html',
  styleUrls: ['./swapi-movies.component.scss']
})
export class SwapiMoviesComponent implements OnInit {

  public allMovies: any[] = [];
  bsModalRef: BsModalRef;

  constructor(
    private swapiService: SwapiService,
    private modalService: BsModalService
  ) {
    this.swapiService.loadAll("films", "1");
  }

  ngOnInit() {
    this.allMovies = this.swapiService.allMovies;
  }

  public showMovie(movie: string) {
    let initialState = this.allMovies.find(e => e.url === movie);
    this.bsModalRef = this.modalService.show(ModalMoviesComponent, Object.assign({initialState}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.closeBtnName = "Close";
  }

}