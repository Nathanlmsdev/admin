import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCandidateApplicationReviewComponent } from './hr-candidate-application-review.component';

describe('HrCandidateApplicationReviewComponent', () => {
  let component: HrCandidateApplicationReviewComponent;
  let fixture: ComponentFixture<HrCandidateApplicationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCandidateApplicationReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCandidateApplicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
