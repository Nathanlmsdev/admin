import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationManagementComponent } from './documentation-management.component';

describe('DocumentationManagementComponent', () => {
  let component: DocumentationManagementComponent;
  let fixture: ComponentFixture<DocumentationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
