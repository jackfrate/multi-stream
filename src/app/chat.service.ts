import { Injectable } from '@angular/core';
import { StreamPair } from './free-objects/stream-pair';
import { StreamListService } from './stream-list.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatOpen: boolean;

  constructor(private streamListSvc: StreamListService) {
    // TODO: will hopefully be a part of the layout svc
    this.chatOpen = true;
  }

  isChatOpen(): boolean {
    return this.chatOpen;
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }

}
