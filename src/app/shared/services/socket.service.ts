import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { UserService } from './user.service';

@Injectable()
export class SocketService {
  public socket;

  constructor(
    private userService: UserService
  ) {
  }

  initiateSocket() {
    this.socket = io('https://webchat18backend.herokuapp.com:3000');
  }

  initiateUsers() {
    this.socket.on('connect', (users) => {
    });
  }
}
