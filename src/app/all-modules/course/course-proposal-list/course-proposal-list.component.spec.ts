import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProposalListComponent } from './course-proposal-list.component';

describe('CourseProposalListComponent', () => {
  let component: CourseProposalListComponent;
  let fixture: ComponentFixture<CourseProposalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProposalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProposalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
