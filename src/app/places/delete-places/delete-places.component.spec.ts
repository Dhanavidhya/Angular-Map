import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlacesComponent } from './delete-places.component';

describe('DeletePlacesComponent', () => {
  let component: DeletePlacesComponent;
  let fixture: ComponentFixture<DeletePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
