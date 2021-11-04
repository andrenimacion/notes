import { TestBed } from '@angular/core/testing';

import { XlsxControllerService } from './xlsx-controller.service';

describe('XlsxControllerService', () => {
  let service: XlsxControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlsxControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
