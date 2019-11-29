import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootModule } from './modules/ngx-boot/ngx-boot.module';
import { SwapiModule } from './modules/swapi/swapi.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxBootModule,
    SwapiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
