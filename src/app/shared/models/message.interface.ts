import {Observable} from "rxjs";
import {User} from "./user.interface";

export interface Message {
  id: number;
  Sender: User
  content: string;
  date: Date;
}
