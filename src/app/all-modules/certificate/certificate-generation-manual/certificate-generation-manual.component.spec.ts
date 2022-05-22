import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGenerationManualComponent } from './certificate-generation-manual.component';

describe('CertificateGenerationManualComponent', () => {
  let component: CertificateGenerationManualComponent;
  let fixture: ComponentFixture<CertificateGenerationManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateGenerationManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateGenerationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
