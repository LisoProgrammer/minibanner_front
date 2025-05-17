import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticspComponent } from './staticsp.component';

describe('StaticspComponent', () => {
  let component: StaticspComponent;
  let fixture: ComponentFixture<StaticspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
