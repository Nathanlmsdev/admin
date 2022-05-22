import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUploadBatchComponent } from './assessment-upload-batch.component';

describe('AssessmentUploadBatchComponent', () => {
  let component: AssessmentUploadBatchComponent;
  let fixture: ComponentFixture<AssessmentUploadBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentUploadBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUploadBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
