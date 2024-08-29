import {User} from "./user.interface";

export interface Message {
  id: number;
  Sender: User
  content: string;
  date: Date;
}

export interface PostMessage {
  Sender: User,
  content: string
}
