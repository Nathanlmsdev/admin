import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCourseDuringComponent } from './attendance-course-during.component';

describe('AttendanceCourseDuringComponent', () => {
  let component: AttendanceCourseDuringComponent;
  let fixture: ComponentFixture<AttendanceCourseDuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceCourseDuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCourseDuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
