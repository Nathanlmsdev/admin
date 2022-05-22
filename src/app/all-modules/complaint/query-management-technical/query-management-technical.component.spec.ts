import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementTechnicalComponent } from './query-management-technical.component';

describe('QueryManagementTechnicalComponent', () => {
  let component: QueryManagementTechnicalComponent;
  let fixture: ComponentFixture<QueryManagementTechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementTechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryManagementTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
