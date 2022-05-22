import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAppraisalComponent } from './trainer-appraisal.component';

describe('TrainerAppraisalComponent', () => {
  let component: TrainerAppraisalComponent;
  let fixture: ComponentFixture<TrainerAppraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerAppraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
