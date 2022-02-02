import { TestBed } from '@angular/core/testing';

import { PaiementServService } from './paiement-serv.service';

describe('PaiementServService', () => {
  let service: PaiementServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
