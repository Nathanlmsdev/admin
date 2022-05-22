import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileStatusComponent } from './student-profile-status.component';

describe('StudentProfileStatusComponent', () => {
  let component: StudentProfileStatusComponent;
  let fixture: ComponentFixture<StudentProfileStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
