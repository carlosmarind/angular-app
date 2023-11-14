import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router: Router = inject(Router);

  let login = localStorage.getItem('login');
  if (login) {
    return true;
  }
  
  return router.createUrlTree(['/login']);
};
