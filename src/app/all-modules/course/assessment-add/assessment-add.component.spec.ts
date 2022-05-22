import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAddComponent } from './assessment-add.component';

describe('AssessmentAddComponent', () => {
  let component: AssessmentAddComponent;
  let fixture: ComponentFixture<AssessmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
