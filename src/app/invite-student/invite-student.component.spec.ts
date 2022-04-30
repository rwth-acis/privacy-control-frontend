import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStudentComponent } from './invite-student.component';

describe('InviteStudentComponent', () => {
  let component: InviteStudentComponent;
  let fixture: ComponentFixture<InviteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
