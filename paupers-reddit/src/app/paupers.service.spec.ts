import { TestBed } from '@angular/core/testing';

import { PaupersService } from './paupers.service';

describe('PaupersService', () => {
  let service: PaupersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaupersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
