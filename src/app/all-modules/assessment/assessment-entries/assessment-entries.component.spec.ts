import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentEntriesComponent } from './assessment-entries.component';

describe('AssessmentEntriesComponent', () => {
  let component: AssessmentEntriesComponent;
  let fixture: ComponentFixture<AssessmentEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
