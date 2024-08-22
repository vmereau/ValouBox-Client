import { Component } from '@angular/core';
import {User} from "../../shared/models/user.interface";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Store} from "@ngrx/store";
import {selectUser} from "../../state/User/user.selectors";
import {UserActions, UserActionsEnum} from "../../state/User/user.actions";
import {Router} from "@angular/router";
import {AppRoutesPath} from "../../app.routes";

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent {
  public user$;
  public newUserForm = new FormControl('');

  constructor(private store: Store, private router: Router) {
    this.user$ = this.store.select(selectUser);
  }

  createUser() {
    const userName = this.newUserForm.value;

    if(!userName){
      //TODO : error
      return;
    }

    const newUser: User = {
      name: userName,
      id: 0
    }

    this.store.dispatch(UserActions[UserActionsEnum.createUser]({user: newUser}));
    this.router.navigate([AppRoutesPath.chatRoom]).then();
  }
}
