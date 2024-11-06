import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../shared/models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private _userBaseUrl = `${environment.api.baseUrl}/user`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public signup(user: Partial<User>): Observable<boolean> {
    return this.http.post<boolean>(this._userBaseUrl, user);
  }
}
