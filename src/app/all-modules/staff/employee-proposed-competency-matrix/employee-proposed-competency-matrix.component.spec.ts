import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProposedCompetencyMatrixComponent } from './employee-proposed-competency-matrix.component';

describe('EmployeeProposedCompetencyMatrixComponent', () => {
  let component: EmployeeProposedCompetencyMatrixComponent;
  let fixture: ComponentFixture<EmployeeProposedCompetencyMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeProposedCompetencyMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProposedCompetencyMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
