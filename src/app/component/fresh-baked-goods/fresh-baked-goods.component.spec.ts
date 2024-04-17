import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshBakedGoodsComponent } from './fresh-baked-goods.component';

describe('FreshBakedGoodsComponent', () => {
  let component: FreshBakedGoodsComponent;
  let fixture: ComponentFixture<FreshBakedGoodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshBakedGoodsComponent]
    });
    fixture = TestBed.createComponent(FreshBakedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
