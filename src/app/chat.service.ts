import { Injectable } from '@angular/core';
import { StreamPair } from './free-objects/stream-pair';
import { StreamListService } from './stream-list.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private streamSet: Array<StreamPair>;
  private chatOpen: boolean;

  constructor(private streamListSvc: StreamListService) {
    // TODO: will hopefully be a part of the layout svc
    this.chatOpen = true;

    this.streamSet = Array.from(this.streamListSvc.getStreamSet());
  }

  isChatOpen(): boolean {
    return this.chatOpen;
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }

  getStreamSet(): Array<StreamPair> {
    return this.streamSet;
  }

  removeChatTab(tabName: string) {
    this.streamSet = this.streamSet.filter((pair: StreamPair) => {
      return pair.channel !== tabName;
    });
  }


}
