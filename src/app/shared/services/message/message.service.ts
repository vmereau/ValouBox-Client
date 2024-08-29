import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _baseUrl = `${environment.api.baseUrl}/message`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public sendMessage(message: string, sender: User): Observable<Boolean> {
    return this.http.post<Boolean>(this._baseUrl, {message, sender});
  }
}
