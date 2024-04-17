import { CanActivateFn } from '@angular/router';

export const guardsLoginGuard: CanActivateFn = (route, state) => {
  return true;
};
