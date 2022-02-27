import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentOverviewComponent } from './consent-overview.component';

describe('ConsentOverviewComponent', () => {
  let component: ConsentOverviewComponent;
  let fixture: ComponentFixture<ConsentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
