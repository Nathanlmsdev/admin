import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountValidatorComponent } from './discount-validator.component';

describe('DiscountValidatorComponent', () => {
  let component: DiscountValidatorComponent;
  let fixture: ComponentFixture<DiscountValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
