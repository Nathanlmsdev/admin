import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAnnualAppraisalComponent } from './employee-annual-appraisal.component';

describe('EmployeeAnnualAppraisalComponent', () => {
  let component: EmployeeAnnualAppraisalComponent;
  let fixture: ComponentFixture<EmployeeAnnualAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAnnualAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAnnualAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
