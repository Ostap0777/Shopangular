import { TestBed } from '@angular/core/testing';

import { BaskedService } from './basked.service';

describe('BaskedService', () => {
  let service: BaskedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaskedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
