import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierVendorManagementComponent } from './supplier-vendor-management.component';

describe('SupplierVendorManagementComponent', () => {
  let component: SupplierVendorManagementComponent;
  let fixture: ComponentFixture<SupplierVendorManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierVendorManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierVendorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
