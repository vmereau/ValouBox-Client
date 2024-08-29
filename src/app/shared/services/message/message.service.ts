import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message, PostMessage} from "../../models/message.interface";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _baseUrl = `${environment.api.baseUrl}/message`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public sendMessage(message: PostMessage): Observable<Message> {
    return this.http.post<Message>(this._baseUrl, {message});
  }
}
