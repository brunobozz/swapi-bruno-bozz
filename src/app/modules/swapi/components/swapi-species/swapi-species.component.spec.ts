import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiSpeciesComponent } from './swapi-species.component';

describe('SwapiSpeciesComponent', () => {
  let component: SwapiSpeciesComponent;
  let fixture: ComponentFixture<SwapiSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
