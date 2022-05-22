import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCostCalculationComponent } from './trainer-cost-calculation.component';

describe('TrainerCostCalculationComponent', () => {
  let component: TrainerCostCalculationComponent;
  let fixture: ComponentFixture<TrainerCostCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCostCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCostCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
