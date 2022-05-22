import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSupplierVendorListComponent } from './approved-supplier-vendor-list.component';

describe('ApprovedSupplierVendorListComponent', () => {
  let component: ApprovedSupplierVendorListComponent;
  let fixture: ComponentFixture<ApprovedSupplierVendorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedSupplierVendorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSupplierVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
