import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUploadQuestionBankComponent } from './assessment-upload-question-bank.component';

describe('AssessmentUploadQuestionBankComponent', () => {
  let component: AssessmentUploadQuestionBankComponent;
  let fixture: ComponentFixture<AssessmentUploadQuestionBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentUploadQuestionBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUploadQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
