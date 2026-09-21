import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly httpClient = inject(HttpClient);

  getUsers() {
    return this.httpClient.get<UserDto[]>('https://jsonplaceholder.typicode.com/users');
  }
}
