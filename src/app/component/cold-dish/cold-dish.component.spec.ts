import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdDishComponent } from './cold-dish.component';

describe('ColdDishComponent', () => {
  let component: ColdDishComponent;
  let fixture: ComponentFixture<ColdDishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdDishComponent]
    });
    fixture = TestBed.createComponent(ColdDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
