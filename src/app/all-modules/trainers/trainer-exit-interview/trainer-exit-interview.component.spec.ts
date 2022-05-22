import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerExitInterviewComponent } from './trainer-exit-interview.component';

describe('TrainerExitInterviewComponent', () => {
  let component: TrainerExitInterviewComponent;
  let fixture: ComponentFixture<TrainerExitInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerExitInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerExitInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
