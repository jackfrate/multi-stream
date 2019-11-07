import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { StreamPair } from '../stream-container/stream-container.component';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  private chatTabs: Map<string, StreamPair>;

  constructor(private chatSvc: ChatService) {
    this.chatTabs = this.chatSvc.getChatTabs()
  }

  getTabNames(): string[] {
    return Array.from(this.chatTabs.keys());
  }

  getTabPair(key: string): StreamPair {
    return this.chatTabs.get(key);
  }

}
