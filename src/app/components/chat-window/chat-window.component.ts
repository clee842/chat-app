import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../providers/message/message.service';
import { IMessage } from '../../shared/interfaces';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  public messages: Observable<IMessage[]>;

  constructor(private messageService: MessageService) {
    this.messages = messageService.messages$;
  }

  ngOnInit() {
  }

}
