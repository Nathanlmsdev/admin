import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeExitInterviewComponent } from './employee-exit-interview.component';

describe('EmployeeExitInterviewComponent', () => {
  let component: EmployeeExitInterviewComponent;
  let fixture: ComponentFixture<EmployeeExitInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeExitInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeExitInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
