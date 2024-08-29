import {Component, inject} from '@angular/core';
import {User} from "../../../shared/models/user.interface";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutesPath} from "../../../app.routes";
import {UsersStore} from "../../../state/users/users.store";
import {AuthStore} from "../../../state/auth/auth.store";

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
  readonly userStore = inject(UsersStore);
  readonly authStore = inject(AuthStore);
  public newUserForm = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}

  createUser() {
    const userName = this.newUserForm.value;

    if(!userName){
      return;
    }

    const newUser: User = {
      name: userName,
      id: 0
    }

    this.userStore.addUser(newUser);
    this.authStore.setUser(newUser);

    this.router.navigate([AppRoutesPath.chatRoom]).then();
  }
}
