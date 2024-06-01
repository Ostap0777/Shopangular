import { CanDeactivateFn } from '@angular/router';

export const userGuard2Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
