import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveManagementComponent } from './employee-leave-management.component';

describe('EmployeeLeaveManagementComponent', () => {
  let component: EmployeeLeaveManagementComponent;
  let fixture: ComponentFixture<EmployeeLeaveManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLeaveManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLeaveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
