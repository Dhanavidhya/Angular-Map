import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlacesComponent } from './search-places.component';

describe('SearchPlacesComponent', () => {
  let component: SearchPlacesComponent;
  let fixture: ComponentFixture<SearchPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
