import { ChatService } from '../chat.service';
import { StreamPair } from '../free-objects/stream-pair';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  private chatTabs: Map<string, StreamPair>;

  constructor(private chatSvc: ChatService) {
    this.chatTabs = this.chatSvc.getChatTabs();
  }

  getTabNames(): string[] {
    return Array.from(this.chatTabs.keys());
  }

  chatTabLength(): number {
    return this.getTabNames().length;
  }

  getTabPair(key: string): StreamPair {
    return this.chatTabs.get(key);
  }

}
