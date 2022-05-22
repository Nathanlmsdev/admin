import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApcorrectionComponent } from './student-apcorrection.component';

describe('StudentApcorrectionComponent', () => {
  let component: StudentApcorrectionComponent;
  let fixture: ComponentFixture<StudentApcorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApcorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApcorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
