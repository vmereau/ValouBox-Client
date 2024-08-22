import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";
import {selectUser} from "../../state/User/user.selectors";
import {firstValueFrom, Observable, of} from "rxjs";
import {AppRoutesPath} from "../../app.routes";

export const authGuard: () => Promise<Observable<boolean> | UrlTree> = async () => {
  const store = inject(Store);
  const router = inject(Router);
  const user = await firstValueFrom(store.select(selectUser));

  if (!user.name) {
    return router.createUrlTree([AppRoutesPath.userCreate])
  }

  return of(true);
};
