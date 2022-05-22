import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationAccessHistoryComponent } from './documentation-access-history.component';

describe('DocumentationAccessHistoryComponent', () => {
  let component: DocumentationAccessHistoryComponent;
  let fixture: ComponentFixture<DocumentationAccessHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationAccessHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationAccessHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
