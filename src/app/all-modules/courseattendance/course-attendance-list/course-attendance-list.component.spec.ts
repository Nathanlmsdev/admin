import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAttendanceListComponent } from './course-attendance-list.component';

describe('CourseAttendanceListComponent', () => {
  let component: CourseAttendanceListComponent;
  let fixture: ComponentFixture<CourseAttendanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAttendanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
