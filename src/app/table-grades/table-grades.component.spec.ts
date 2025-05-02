import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGradesComponent } from './table-grades.component';

describe('TableGradesComponent', () => {
  let component: TableGradesComponent;
  let fixture: ComponentFixture<TableGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
