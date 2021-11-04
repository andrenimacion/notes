import { TestBed } from '@angular/core/testing';

import { ControlClassService } from './control-class.service';

describe('ControlClassService', () => {
  let service: ControlClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
