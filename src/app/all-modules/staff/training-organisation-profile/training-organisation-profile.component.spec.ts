import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganisationProfileComponent } from './training-organisation-profile.component';

describe('TrainingOrganisationProfileComponent', () => {
  let component: TrainingOrganisationProfileComponent;
  let fixture: ComponentFixture<TrainingOrganisationProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingOrganisationProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganisationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
