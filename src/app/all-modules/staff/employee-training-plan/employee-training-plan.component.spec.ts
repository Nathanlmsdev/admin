import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrainingPlanComponent } from './employee-training-plan.component';

describe('EmployeeTrainingPlanComponent', () => {
  let component: EmployeeTrainingPlanComponent;
  let fixture: ComponentFixture<EmployeeTrainingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTrainingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTrainingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
