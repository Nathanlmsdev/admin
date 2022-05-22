import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintManagementFollowupComponent } from './complaint-management-followup.component';

describe('ComplaintManagementFollowupComponent', () => {
  let component: ComplaintManagementFollowupComponent;
  let fixture: ComponentFixture<ComplaintManagementFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintManagementFollowupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintManagementFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
