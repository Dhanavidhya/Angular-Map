import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlacesComponent } from './list-places.component';

describe('ListPlacesComponent', () => {
  let component: ListPlacesComponent;
  let fixture: ComponentFixture<ListPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
