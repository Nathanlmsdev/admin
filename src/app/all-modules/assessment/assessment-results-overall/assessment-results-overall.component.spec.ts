import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentResultsOverallComponent } from './assessment-results-overall.component';

describe('AssessmentResultsOverallComponent', () => {
  let component: AssessmentResultsOverallComponent;
  let fixture: ComponentFixture<AssessmentResultsOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentResultsOverallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentResultsOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
