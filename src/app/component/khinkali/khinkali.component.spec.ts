import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhinkaliComponent } from './khinkali.component';

describe('KhinkaliComponent', () => {
  let component: KhinkaliComponent;
  let fixture: ComponentFixture<KhinkaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhinkaliComponent]
    });
    fixture = TestBed.createComponent(KhinkaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
