import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDishComponent } from './hot-dish.component';

describe('HotDishComponent', () => {
  let component: HotDishComponent;
  let fixture: ComponentFixture<HotDishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotDishComponent]
    });
    fixture = TestBed.createComponent(HotDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
