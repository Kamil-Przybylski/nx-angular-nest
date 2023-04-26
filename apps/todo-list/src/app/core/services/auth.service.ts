import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  getOne(id: number): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/api/auth/user/' + id);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/api/auth/users');
  }
}
