import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUploadAnswerComponent } from './assessment-upload-answer.component';

describe('AssessmentUploadAnswerComponent', () => {
  let component: AssessmentUploadAnswerComponent;
  let fixture: ComponentFixture<AssessmentUploadAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentUploadAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUploadAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
