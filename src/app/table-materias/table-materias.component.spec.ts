import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMateriasComponent } from './table-materias.component';

describe('TableMateriasComponent', () => {
  let component: TableMateriasComponent;
  let fixture: ComponentFixture<TableMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
