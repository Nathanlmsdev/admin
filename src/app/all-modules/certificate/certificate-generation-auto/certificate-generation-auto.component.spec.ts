import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGenerationAutoComponent } from './certificate-generation-auto.component';

describe('CertificateGenerationAutoComponent', () => {
  let component: CertificateGenerationAutoComponent;
  let fixture: ComponentFixture<CertificateGenerationAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateGenerationAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateGenerationAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
