import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenerationManualComponent } from './card-generation-manual.component';

describe('CardGenerationManualComponent', () => {
  let component: CardGenerationManualComponent;
  let fixture: ComponentFixture<CardGenerationManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGenerationManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGenerationManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
