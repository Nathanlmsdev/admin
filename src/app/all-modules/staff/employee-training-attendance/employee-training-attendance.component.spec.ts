import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrainingAttendanceComponent } from './employee-training-attendance.component';

describe('EmployeeTrainingAttendanceComponent', () => {
  let component: EmployeeTrainingAttendanceComponent;
  let fixture: ComponentFixture<EmployeeTrainingAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTrainingAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTrainingAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
