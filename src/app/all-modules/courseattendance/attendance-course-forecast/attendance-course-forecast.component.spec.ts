import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCourseForecastComponent } from './attendance-course-forecast.component';

describe('AttendanceCourseForecastComponent', () => {
  let component: AttendanceCourseForecastComponent;
  let fixture: ComponentFixture<AttendanceCourseForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCourseForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCourseForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
