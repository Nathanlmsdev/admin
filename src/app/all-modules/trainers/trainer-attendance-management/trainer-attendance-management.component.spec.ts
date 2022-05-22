import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAttendanceManagementComponent } from './trainer-attendance-management.component';

describe('TrainerAttendanceManagementComponent', () => {
  let component: TrainerAttendanceManagementComponent;
  let fixture: ComponentFixture<TrainerAttendanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAttendanceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAttendanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
