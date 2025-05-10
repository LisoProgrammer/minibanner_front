import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataeComponent } from './datae.component';

describe('DataeComponent', () => {
  let component: DataeComponent;
  let fixture: ComponentFixture<DataeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
