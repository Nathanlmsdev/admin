import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantSubmissionHistoryComponent } from './grant-submission-history.component';

describe('GrantSubmissionHistoryComponent', () => {
  let component: GrantSubmissionHistoryComponent;
  let fixture: ComponentFixture<GrantSubmissionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantSubmissionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSubmissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
