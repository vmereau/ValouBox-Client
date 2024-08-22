import {createActionGroup, props} from '@ngrx/store';
import {User} from "../../shared/models/user.interface";

export enum UserActionsEnum {
  createUser= "[User]Create"
}


export const UserActions = createActionGroup({
  source: "Users",
  events: {
    [UserActionsEnum.createUser]: props<{user: User}>()
  }
});
