import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherapiComponent } from './weatherapi.component';

describe('WeatherapiComponent', () => {
  let component: WeatherapiComponent;
  let fixture: ComponentFixture<WeatherapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
