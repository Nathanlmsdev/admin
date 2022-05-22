import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ApprovalDocumentComponent } from "./approval-document.component";

describe("ApprovalDocumentComponent", () => {
  let component: ApprovalDocumentComponent;
  let fixture: ComponentFixture<ApprovalDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalDocumentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
