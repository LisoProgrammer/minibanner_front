import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapComponent } from './datap.component';

describe('DatapComponent', () => {
  let component: DatapComponent;
  let fixture: ComponentFixture<DatapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
