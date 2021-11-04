import { TestBed } from '@angular/core/testing';

import { DesNotesControlService } from './des-notes-control.service';

describe('DesNotesControlService', () => {
  let service: DesNotesControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesNotesControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
