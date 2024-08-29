import {Component, inject} from '@angular/core';
import {Message, PostMessage} from "../../../shared/models/message.interface";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {UsersStore} from "../../../state/users/users.store";
import {AuthStore} from "../../../state/auth/auth.store";
import {patchState} from "@ngrx/signals";
import {MessagesStore} from "../../../state/messages/messages.store";

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    AsyncPipe,
  ],
  providers: [MessagesStore],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {
  // readonly userStore = inject(UsersStore);
  readonly messageStore = inject(MessagesStore);
  readonly authStore = inject(AuthStore);

  public newMessageForm = new FormControl('');

  // TODO remove when id are server side
  private fakeIndex = 0;

  constructor() {}

  public sendMessage(): void {
    const user = this.authStore.user();

    if(!user){
      return;
    }

    let message: PostMessage = {
      content: this.newMessageForm.value || "",
      Sender: user,
    }

    this.messageStore.addMessage(message);
    this.newMessageForm.setValue("");
    this.fakeIndex++;
  }
}
