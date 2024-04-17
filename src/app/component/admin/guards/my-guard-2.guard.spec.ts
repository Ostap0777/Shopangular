import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { MyGuard2Guard} from './my-guard-2.guard';
import { myGuard1Guard } from './my-guard-1.guard';

describe('myGuard2Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myGuard1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
