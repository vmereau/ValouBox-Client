import {createReducer, on} from '@ngrx/store';
import {User} from "../../shared/models/user.interface";
import {UserActions, UserActionsEnum} from "./user.actions";

export const UserFeatureKey = 'user';

export const initialState: User = {
  id: 0,
  name: undefined
};

export const userReducer = createReducer(
  initialState,
  on(UserActions[UserActionsEnum.createUser], (_state, {user}) => user)
);
