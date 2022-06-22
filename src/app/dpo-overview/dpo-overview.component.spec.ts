import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoOverviewComponent } from './dpo-overview.component';

describe('DpoOverviewComponent', () => {
  let component: DpoOverviewComponent;
  let fixture: ComponentFixture<DpoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
