import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu: string[] = [];

  constructor() { }

  ngOnInit() {
    routes.forEach(x => { if (x.path) this.menu.push(x.path) });
  }

}
