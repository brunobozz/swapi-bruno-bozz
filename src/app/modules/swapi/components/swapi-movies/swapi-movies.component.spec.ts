import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiMoviesComponent } from './swapi-movies.component';

describe('SwapiMoviesComponent', () => {
  let component: SwapiMoviesComponent;
  let fixture: ComponentFixture<SwapiMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
