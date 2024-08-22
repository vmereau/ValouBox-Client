import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatRoomComponent} from "./pages/chat-room/chat-room.component";
import {UserCreateComponent} from "./pages/user-create/user-create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatRoomComponent, UserCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ValouBox-Client';
}
