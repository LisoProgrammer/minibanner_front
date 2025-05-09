import { TestBed } from '@angular/core/testing';

import { AlumnoPService } from './alumno-p.service';

describe('AlumnoPService', () => {
  let service: AlumnoPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
