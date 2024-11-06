import {patchState, signalStore, withMethods} from "@ngrx/signals";
import {addEntities, addEntity, withEntities} from "@ngrx/signals/entities";
import {User} from "../../shared/models/user.interface";

export const UsersStore = signalStore(
  {providedIn: 'root'},
  withEntities<User>(),
  withMethods((store) => ({
    addUser(user: User): void {
      // @ts-ignore
      patchState(store, addEntity(user));
    }
  }))
);
