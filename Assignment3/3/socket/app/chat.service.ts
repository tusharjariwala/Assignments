import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Socket } from 'dgram';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }

  public send(message:Message) {
    console.log(typeof(message));
    this.socket.emit('new-message', message);
  }

  public get = () => {
    return Observable.create((observer:any) => {
            this.socket.on('new-message', (message: Message) => {
                observer.next(message);
            });
    });
  }
}
