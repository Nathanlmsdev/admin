import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRequirementListComponent } from './course-requirement-list.component';

describe('CourseRequirementListComponent', () => {
  let component: CourseRequirementListComponent;
  let fixture: ComponentFixture<CourseRequirementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRequirementListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRequirementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
