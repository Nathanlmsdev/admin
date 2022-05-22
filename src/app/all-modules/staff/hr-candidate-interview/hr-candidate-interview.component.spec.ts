import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCandidateInterviewComponent } from './hr-candidate-interview.component';

describe('HrCandidateInterviewComponent', () => {
  let component: HrCandidateInterviewComponent;
  let fixture: ComponentFixture<HrCandidateInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCandidateInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCandidateInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
