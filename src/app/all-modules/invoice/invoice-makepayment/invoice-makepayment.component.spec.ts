import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceMakepaymentComponent } from './invoice-makepayment.component';

describe('InvoiceMakepaymentComponent', () => {
  let component: InvoiceMakepaymentComponent;
  let fixture: ComponentFixture<InvoiceMakepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceMakepaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceMakepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
