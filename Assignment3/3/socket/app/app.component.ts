import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage: any;
  messageList:  string[] = [];

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.send(this.newMessage);
    this.newMessage = '';
  }
  ngOnInit() {
    this.chatService
      .get()
      .subscribe((message: string) => {
        this.messageList.push(message);
      });
  }
}
