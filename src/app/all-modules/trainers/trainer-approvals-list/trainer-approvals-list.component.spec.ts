import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerApprovalsListComponent } from './trainer-approvals-list.component';

describe('TrainerApprovalsListComponent', () => {
  let component: TrainerApprovalsListComponent;
  let fixture: ComponentFixture<TrainerApprovalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerApprovalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerApprovalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
