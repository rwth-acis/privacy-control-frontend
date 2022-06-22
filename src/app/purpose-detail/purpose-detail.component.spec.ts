import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeDetailComponent } from './purpose-detail.component';

describe('PurposeDetailComponent', () => {
  let component: PurposeDetailComponent;
  let fixture: ComponentFixture<PurposeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
