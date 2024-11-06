import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Message, PostMessage} from "../../models/message.interface";
import {Observable} from "rxjs";
import {User} from "../../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl = `${environment.api.baseUrl}/user`;

  constructor(
    private readonly http: HttpClient
  ) { }
}
