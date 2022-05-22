import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountGenerateCodeComponent } from './discount-generate-code.component';

describe('DiscountGenerateCodeComponent', () => {
  let component: DiscountGenerateCodeComponent;
  let fixture: ComponentFixture<DiscountGenerateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountGenerateCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountGenerateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
