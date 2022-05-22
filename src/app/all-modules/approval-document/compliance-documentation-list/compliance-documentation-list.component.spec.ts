import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceDocumentationListComponent } from './compliance-documentation-list.component';

describe('ComplianceDocumentationListComponent', () => {
  let component: ComplianceDocumentationListComponent;
  let fixture: ComponentFixture<ComplianceDocumentationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceDocumentationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceDocumentationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
