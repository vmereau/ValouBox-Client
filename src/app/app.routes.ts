import { Routes } from '@angular/router';
import {ChatRoomComponent} from "./auth/chat-room/chat-room.component";
import {authGuard} from "./shared/guards/auth.guard";
import {SignupComponent} from "./public/signup/signup.component";

export enum AppRoutesPath {
  userCreate = "user-create",
  chatRoom = "chat-room",
}

export const routes: Routes = [
  {
    path: AppRoutesPath.userCreate,
    component: SignupComponent
  },
  {
    path: AppRoutesPath.chatRoom,
    component: ChatRoomComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    component: SignupComponent
  }
];
