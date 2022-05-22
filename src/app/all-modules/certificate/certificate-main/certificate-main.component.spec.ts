import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateMainComponent } from './certificate-main.component';

describe('CertificateMainComponent', () => {
  let component: CertificateMainComponent;
  let fixture: ComponentFixture<CertificateMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
