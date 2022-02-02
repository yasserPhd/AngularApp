import { TestBed } from '@angular/core/testing';

import { BenificeService } from './benifice.service';

describe('BenificeService', () => {
  let service: BenificeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenificeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
