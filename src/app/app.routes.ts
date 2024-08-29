import { Routes } from '@angular/router';
import {UserCreateComponent} from "./pages/public/user-create/user-create.component";
import {ChatRoomComponent} from "./pages/auth/chat-room/chat-room.component";
import {authGuard} from "./shared/guards/auth.guard";

export enum AppRoutesPath {
  userCreate = "user-create",
  chatRoom = "chat-room",
}

export const routes: Routes = [
  {
    path: AppRoutesPath.userCreate,
    component: UserCreateComponent
  },
  {
    path: AppRoutesPath.chatRoom,
    component: ChatRoomComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    component: UserCreateComponent
  }
];
