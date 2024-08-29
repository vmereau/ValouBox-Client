import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";
import {firstValueFrom, Observable, of} from "rxjs";
import {AppRoutesPath} from "../../app.routes";
import {AuthStore} from "../../state/auth/auth.store";

export const authGuard: () => Promise<Observable<boolean> | UrlTree> = async () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const user = authStore.user();

  if (!user) {
    return router.createUrlTree([AppRoutesPath.userCreate])
  }

  return of(true);
};
