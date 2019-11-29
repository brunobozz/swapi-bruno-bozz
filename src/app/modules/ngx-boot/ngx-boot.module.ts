import { NgModule } from "@angular/core";

import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  PaginationModule,
} from "ngx-bootstrap";

@NgModule({
  imports: [
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    PaginationModule
  ]
})
export class NgxBootModule {}
