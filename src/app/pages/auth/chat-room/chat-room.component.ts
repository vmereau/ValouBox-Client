import { Component } from '@angular/core';
import {Message} from "../../../shared/models/message.interface";
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Store} from "@ngrx/store";
import {selectUser} from "../../../state/User/user.selectors";

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    AsyncPipe,
  ],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss'
})
export class ChatRoomComponent {

  public user$;
  public messages: Message[] = [];
  public newMessageForm = new FormControl('');

  constructor(private store: Store) {
    this.user$ = this.store.select(selectUser);
  }

  public sendMessage(): void {
    let message: Message = {
      content: this.newMessageForm.value || "",
      Sender: this.user$,
      id: 0,
      date: new Date()
    }

    this.messages.push(message);
    this.newMessageForm.setValue("");
  }
}
