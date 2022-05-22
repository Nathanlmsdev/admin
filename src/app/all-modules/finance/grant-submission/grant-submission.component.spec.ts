import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantSubmissionComponent } from './grant-submission.component';

describe('GrantSubmissionComponent', () => {
  let component: GrantSubmissionComponent;
  let fixture: ComponentFixture<GrantSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
