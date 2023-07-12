import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  var role = "admin";
  if(role == "admin"){
    return true
  }
  return false;
};
