import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeApprovedRolesComponent } from './employee-approved-roles.component';

describe('EmployeeApprovedRolesComponent', () => {
  let component: EmployeeApprovedRolesComponent;
  let fixture: ComponentFixture<EmployeeApprovedRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeApprovedRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeApprovedRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
