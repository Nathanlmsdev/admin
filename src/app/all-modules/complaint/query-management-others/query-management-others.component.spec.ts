import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryManagementOthersComponent } from './query-management-others.component';

describe('QueryManagementOthersComponent', () => {
  let component: QueryManagementOthersComponent;
  let fixture: ComponentFixture<QueryManagementOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryManagementOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryManagementOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
