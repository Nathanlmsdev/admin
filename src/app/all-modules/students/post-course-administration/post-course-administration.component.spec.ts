import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCourseAdministrationComponent } from './post-course-administration.component';

describe('PostCourseAdministrationComponent', () => {
  let component: PostCourseAdministrationComponent;
  let fixture: ComponentFixture<PostCourseAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCourseAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCourseAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
