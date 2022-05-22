import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompetencyMatrixReviewComponent } from './employee-competency-matrix-review.component';

describe('EmployeeCompetencyMatrixReviewComponent', () => {
  let component: EmployeeCompetencyMatrixReviewComponent;
  let fixture: ComponentFixture<EmployeeCompetencyMatrixReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCompetencyMatrixReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCompetencyMatrixReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
