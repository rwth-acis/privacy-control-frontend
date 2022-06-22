import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeCreateComponent } from './purpose-create.component';

describe('PurposeCreateComponent', () => {
  let component: PurposeCreateComponent;
  let fixture: ComponentFixture<PurposeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
