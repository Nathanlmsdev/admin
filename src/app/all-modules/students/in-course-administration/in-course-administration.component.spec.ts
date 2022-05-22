import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCourseAdministrationComponent } from './in-course-administration.component';

describe('InCourseAdministrationComponent', () => {
  let component: InCourseAdministrationComponent;
  let fixture: ComponentFixture<InCourseAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCourseAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InCourseAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
