import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentResultsIndividualComponent } from './assessment-results-individual.component';

describe('AssessmentResultsIndividualComponent', () => {
  let component: AssessmentResultsIndividualComponent;
  let fixture: ComponentFixture<AssessmentResultsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentResultsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentResultsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
