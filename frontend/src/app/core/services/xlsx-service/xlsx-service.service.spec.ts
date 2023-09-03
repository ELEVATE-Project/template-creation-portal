import { TestBed } from '@angular/core/testing';

import { XlsxServiceService } from './xlsx-service.service';

describe('XlsxServiceService', () => {
  let service: XlsxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlsxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
