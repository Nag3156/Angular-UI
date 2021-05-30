import { TestBed } from '@angular/core/testing';

import { DiaogService } from './diaog.service';

describe('DiaogService', () => {
  let service: DiaogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
