import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

let isLoggedIn=false;


export const guardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(isLoggedIn){
    return true; //dejar pasar
  }
  //si noesta logueado redirige a login 
  return router.parseUrl('/auth/login');
};

export function login(){
  console.log('entrando al guard del login')
  isLoggedIn=true;
}

export function logout(){
  console.log('entrando al guard del logout del login')
  isLoggedIn=false;
}
