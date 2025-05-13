import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangePassComponent } from './form-change-pass.component';

describe('FormChangePassComponent', () => {
  let component: FormChangePassComponent;
  let fixture: ComponentFixture<FormChangePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormChangePassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChangePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
