import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUploadQuestionComponent } from './assessment-upload-question.component';

describe('AssessmentUploadQuestionComponent', () => {
  let component: AssessmentUploadQuestionComponent;
  let fixture: ComponentFixture<AssessmentUploadQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentUploadQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUploadQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
