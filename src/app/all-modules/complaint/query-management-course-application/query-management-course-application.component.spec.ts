import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementCourseApplicationComponent } from './query-management-course-application.component';

describe('QueryManagementCourseApplicationComponent', () => {
  let component: QueryManagementCourseApplicationComponent;
  let fixture: ComponentFixture<QueryManagementCourseApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementCourseApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryManagementCourseApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
