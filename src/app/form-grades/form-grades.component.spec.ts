import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGradesComponent } from './form-grades.component';

describe('FormGradesComponent', () => {
  let component: FormGradesComponent;
  let fixture: ComponentFixture<FormGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
