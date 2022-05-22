import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRequirementComponent } from './course-requirement.component';

describe('CourseRequirementComponent', () => {
  let component: CourseRequirementComponent;
  let fixture: ComponentFixture<CourseRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
