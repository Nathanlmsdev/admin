import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenerationAutoComponent } from './card-generation-auto.component';

describe('CardGenerationAutoComponent', () => {
  let component: CardGenerationAutoComponent;
  let fixture: ComponentFixture<CardGenerationAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGenerationAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGenerationAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
