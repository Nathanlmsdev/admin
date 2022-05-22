import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAnswerpaperCorrectionComponent } from './assessment-answerpaper-correction.component';

describe('AssessmentAnswerpaperCorrectionComponent', () => {
  let component: AssessmentAnswerpaperCorrectionComponent;
  let fixture: ComponentFixture<AssessmentAnswerpaperCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentAnswerpaperCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentAnswerpaperCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
