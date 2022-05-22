import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementPaymentComponent } from './query-management-payment.component';

describe('QueryManagementPaymentComponent', () => {
  let component: QueryManagementPaymentComponent;
  let fixture: ComponentFixture<QueryManagementPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryManagementPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
