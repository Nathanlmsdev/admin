import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerApprovalsComponent } from './trainer-approvals.component';

describe('TrainerApprovalsComponent', () => {
  let component: TrainerApprovalsComponent;
  let fixture: ComponentFixture<TrainerApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
