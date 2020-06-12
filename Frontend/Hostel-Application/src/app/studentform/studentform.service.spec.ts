import { TestBed } from '@angular/core/testing';

import { StudentformService } from './studentform.service';

describe('SudentformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentformService = TestBed.get(StudentformService);
    expect(service).toBeTruthy();
  });
});
