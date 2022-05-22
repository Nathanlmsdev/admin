import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementTrainingComponent } from './query-management-training.component';

describe('QueryManagementTrainingComponent', () => {
  let component: QueryManagementTrainingComponent;
  let fixture: ComponentFixture<QueryManagementTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryManagementTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
