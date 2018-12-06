import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from '../../shared/interfaces';
import { MessageService } from '../../providers/message/message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  public messages: Observable<IMessage[]>;
  public inputMessage: string;
  public nickName: string = 'Bob';

  constructor(private messageService: MessageService) {
    this.messages = messageService.messages$;
  }

  ngOnInit() {
  }

  public sendMessage() {
    this.messageService.sendMessage(this.nickName, this.inputMessage);
    this.inputMessage = '';
  }

}
