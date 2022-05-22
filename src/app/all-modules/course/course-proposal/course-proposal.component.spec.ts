import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProposalComponent } from './course-proposal.component';

describe('CourseProposalComponent', () => {
  let component: CourseProposalComponent;
  let fixture: ComponentFixture<CourseProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
