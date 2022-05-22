import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPlanComponent } from './assessment-plan.component';

describe('AssessmentPlanComponent', () => {
  let component: AssessmentPlanComponent;
  let fixture: ComponentFixture<AssessmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
