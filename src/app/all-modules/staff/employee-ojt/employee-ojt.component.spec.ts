import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOjtComponent } from './employee-ojt.component';

describe('EmployeeOjtComponent', () => {
  let component: EmployeeOjtComponent;
  let fixture: ComponentFixture<EmployeeOjtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeOjtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOjtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
