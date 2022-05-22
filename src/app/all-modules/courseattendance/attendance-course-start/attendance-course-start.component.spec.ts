import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCourseStartComponent } from './attendance-course-start.component';

describe('AttendanceCourseStartComponent', () => {
  let component: AttendanceCourseStartComponent;
  let fixture: ComponentFixture<AttendanceCourseStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCourseStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCourseStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
