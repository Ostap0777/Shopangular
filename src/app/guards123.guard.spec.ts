import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guards123Guard } from './guards123.guard';

describe('guards123Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guards123Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
