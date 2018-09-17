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
    this.socket = io.connect('wss://webchat18api.herokuapp.com:3001', { secure: true, reconnect: true, rejectUnauthorized : false });
    // this.socket = io.connect('http://localhost:8080', { secure: true, reconnect: true, rejectUnauthorized : false });
  }

  initiateUsers() {
    this.socket.on('connect', (users) => {
    });
  }
}
