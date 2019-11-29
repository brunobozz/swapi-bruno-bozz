import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiVehiclesComponent } from './swapi-vehicles.component';

describe('SwapiVehiclesComponent', () => {
  let component: SwapiVehiclesComponent;
  let fixture: ComponentFixture<SwapiVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
