import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingPaymentsReceivedComponent } from './making-payments-received.component';

describe('MakingPaymentsReceivedComponent', () => {
  let component: MakingPaymentsReceivedComponent;
  let fixture: ComponentFixture<MakingPaymentsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakingPaymentsReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingPaymentsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
