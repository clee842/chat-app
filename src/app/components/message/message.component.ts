import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from '../../shared/interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() public message: IMessage;

  constructor() { }

  ngOnInit() {
  }

}
