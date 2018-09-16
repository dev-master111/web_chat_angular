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
    this.socket = io.connect('https://webchat18api.herokuapp.com:3000', {secure: true, rejectUnauthorized : false});
  }

  initiateUsers() {
    this.socket.on('connect', (users) => {
    });
  }
}
