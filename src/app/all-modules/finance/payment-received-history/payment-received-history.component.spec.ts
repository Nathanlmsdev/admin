import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReceivedHistoryComponent } from './payment-received-history.component';

describe('PaymentReceivedHistoryComponent', () => {
  let component: PaymentReceivedHistoryComponent;
  let fixture: ComponentFixture<PaymentReceivedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentReceivedHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentReceivedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
