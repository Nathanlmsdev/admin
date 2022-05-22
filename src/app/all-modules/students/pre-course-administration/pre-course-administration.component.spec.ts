import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCourseAdministrationComponent } from './pre-course-administration.component';

describe('PreCourseAdministrationComponent', () => {
  let component: PreCourseAdministrationComponent;
  let fixture: ComponentFixture<PreCourseAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreCourseAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCourseAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
