import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealManagementComponent } from './appeal-management.component';

describe('AppealManagementComponent', () => {
  let component: AppealManagementComponent;
  let fixture: ComponentFixture<AppealManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppealManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppealManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
