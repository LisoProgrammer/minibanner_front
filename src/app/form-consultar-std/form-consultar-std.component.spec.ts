import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultarStdComponent } from './form-consultar-std.component';

describe('FormConsultarStdComponent', () => {
  let component: FormConsultarStdComponent;
  let fixture: ComponentFixture<FormConsultarStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConsultarStdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConsultarStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
