import {User} from "../../shared/models/user.interface";
import {getState, patchState, signalStore, withHooks, withMethods, withState} from "@ngrx/signals";
import {effect} from "@angular/core";

type AuthState = {
  user: User | undefined
};

const initialState: AuthState = {
  user: undefined
}

export const AuthStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store) => ({
    setUser(user: User): void {
      // @ts-ignore
      patchState(store, {user});
    }
  })),
  withHooks({
    onInit(store) {
      effect(() => {
        const state = getState(store);
        console.log(state);
      });
    }
  })
)
