import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeCourseComponent } from './purpose-course.component';

describe('PurposeCourseComponent', () => {
  let component: PurposeCourseComponent;
  let fixture: ComponentFixture<PurposeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
