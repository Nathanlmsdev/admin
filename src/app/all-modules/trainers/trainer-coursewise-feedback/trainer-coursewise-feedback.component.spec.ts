import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCoursewiseFeedbackComponent } from './trainer-coursewise-feedback.component';

describe('TrainerCoursewiseFeedbackComponent', () => {
  let component: TrainerCoursewiseFeedbackComponent;
  let fixture: ComponentFixture<TrainerCoursewiseFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCoursewiseFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCoursewiseFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
