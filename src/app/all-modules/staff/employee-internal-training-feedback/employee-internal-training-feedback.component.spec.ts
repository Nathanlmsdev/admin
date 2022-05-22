import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInternalTrainingFeedbackComponent } from './employee-internal-training-feedback.component';

describe('EmployeeInternalTrainingFeedbackComponent', () => {
  let component: EmployeeInternalTrainingFeedbackComponent;
  let fixture: ComponentFixture<EmployeeInternalTrainingFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeInternalTrainingFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInternalTrainingFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
