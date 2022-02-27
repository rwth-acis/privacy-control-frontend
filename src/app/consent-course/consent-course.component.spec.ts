import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentCourseComponent } from './consent-course.component';

describe('ConsentCourseComponent', () => {
  let component: ConsentCourseComponent;
  let fixture: ComponentFixture<ConsentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
