import { Injectable } from '@angular/core';
import { StreamListService } from './stream-list.service';
import { ChatSettings } from './free-objects/settings-interface';

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
