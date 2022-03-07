import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeOverviewComponent } from './purpose-overview.component';

describe('PurposeOverviewComponent', () => {
  let component: PurposeOverviewComponent;
  let fixture: ComponentFixture<PurposeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurposeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
