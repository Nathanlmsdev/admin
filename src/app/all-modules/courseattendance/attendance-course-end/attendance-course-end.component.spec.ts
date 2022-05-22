import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCourseEndComponent } from './attendance-course-end.component';

describe('AttendanceCourseEndComponent', () => {
  let component: AttendanceCourseEndComponent;
  let fixture: ComponentFixture<AttendanceCourseEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCourseEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCourseEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
