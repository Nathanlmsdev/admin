import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsMadeListComponent } from './payments-made-list.component';

describe('PaymentsMadeListComponent', () => {
  let component: PaymentsMadeListComponent;
  let fixture: ComponentFixture<PaymentsMadeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsMadeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsMadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
