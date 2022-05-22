import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceManualModeComponent } from './invoice-manual-mode.component';

describe('InvoiceManualModeComponent', () => {
  let component: InvoiceManualModeComponent;
  let fixture: ComponentFixture<InvoiceManualModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceManualModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceManualModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
