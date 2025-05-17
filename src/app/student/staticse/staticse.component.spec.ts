import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticseComponent } from './staticse.component';

describe('StaticseComponent', () => {
  let component: StaticseComponent;
  let fixture: ComponentFixture<StaticseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
