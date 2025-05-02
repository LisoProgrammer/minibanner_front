import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStdComponent } from './table-std.component';

describe('TableStdComponent', () => {
  let component: TableStdComponent;
  let fixture: ComponentFixture<TableStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
