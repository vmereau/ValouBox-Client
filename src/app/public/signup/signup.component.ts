import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {User} from "../../shared/models/user.interface";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutesPath} from "../../app.routes";
import {UsersStore} from "../../state/users/users.store";
import {AuthStore} from "../../state/auth/auth.store";
import {UserService} from "../../shared/services/user/user.service";
import {Subscription} from "rxjs";
import {PublicService} from "../public.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnDestroy {
  // readonly userStore = inject(UsersStore);
  // readonly authStore = inject(AuthStore);
  readonly formBuilder = inject(FormBuilder);

  private _subscriptions: Subscription[] = [];

  public signupForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(private router: Router,
              private publicService: PublicService) {}


  onSignup() {
    const userName = this.signupForm.controls['username'].value;
    const password = this.signupForm.controls['password'].value;

    if(!userName || !password){
      return;
    }

    const newUser: Partial<User> = {
      name: userName,
      password: password
    }

    const sub = this.publicService.signup(newUser).subscribe({
      next: (createSuccess) => {

        // this.userStore.addUser(createdUser);
        // this.authStore.setUser(newUser);
        //
        // this.router.navigate([AppRoutesPath.chatRoom]).then();
        console.log(createSuccess);
      },
      error: (error) => {
        console.log(error);
      }
    })

    this._subscriptions.push(sub);
  }

  public ngOnDestroy(): void {
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }
}
