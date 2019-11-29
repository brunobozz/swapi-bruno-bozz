import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiStarshipsComponent } from './swapi-starships.component';

describe('SwapiStarshipsComponent', () => {
  let component: SwapiStarshipsComponent;
  let fixture: ComponentFixture<SwapiStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
