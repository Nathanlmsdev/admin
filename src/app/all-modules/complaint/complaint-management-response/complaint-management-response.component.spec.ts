import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintManagementResponseComponent } from './complaint-management-response.component';

describe('ComplaintManagementResponseComponent', () => {
  let component: ComplaintManagementResponseComponent;
  let fixture: ComponentFixture<ComplaintManagementResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintManagementResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintManagementResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
