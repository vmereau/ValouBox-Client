import {createFeatureSelector} from "@ngrx/store";
import {User} from "../../shared/models/user.interface";
import {UserFeatureKey} from "./user.reducer";

export const selectUser = createFeatureSelector<Readonly<User>>(UserFeatureKey);
