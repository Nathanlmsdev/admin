import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPaymentsReceivedComponent } from './review-payments-received.component';

describe('ReviewPaymentsReceivedComponent', () => {
  let component: ReviewPaymentsReceivedComponent;
  let fixture: ComponentFixture<ReviewPaymentsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPaymentsReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPaymentsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
