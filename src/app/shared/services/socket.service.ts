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
    this.socket = io.connect('http://localhost:3000', { secure: true, reconnect: true, rejectUnauthorized : false });
  }

  initiateUsers() {
    this.socket.on('connect', (users) => {
    });
  }
}
