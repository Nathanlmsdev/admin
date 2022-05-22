import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCourseMaterialsComponent } from './trainer-course-materials.component';

describe('TrainerCourseMaterialsComponent', () => {
  let component: TrainerCourseMaterialsComponent;
  let fixture: ComponentFixture<TrainerCourseMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerCourseMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCourseMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
