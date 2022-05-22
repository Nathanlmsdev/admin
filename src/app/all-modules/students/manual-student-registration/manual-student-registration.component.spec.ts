import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualStudentRegistrationComponent } from './manual-student-registration.component';

describe('ManualStudentRegistrationComponent', () => {
  let component: ManualStudentRegistrationComponent;
  let fixture: ComponentFixture<ManualStudentRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualStudentRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualStudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
