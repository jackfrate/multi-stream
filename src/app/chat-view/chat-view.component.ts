import { StreamPair } from '../free-objects/stream-pair';
import { Component } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { LayoutService } from '../layout.service';
import { ChatSettings, PlayerSettings } from '../free-objects/settings-interface';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  private streamList: Set<StreamPair>;

  chatHeight: number;

  constructor(private streamListSvc: StreamListService, private layoutSvc: LayoutService) {
    this.streamList = this.streamListSvc.getStreamSet();
    this.chatHeight = this.layoutSvc.chatHeight;
  }


  getStreamList(): Set<StreamPair> {
    return this.streamList;
  }

  getChatUrl(pair: StreamPair): string {
    if (pair.isTwitch()) {
      return `https://www.twitch.tv/embed/${pair.channel}/chat`;
    }

    if (pair.isMixer()) {
      return `https://mixer.com/embed/chat/${pair.channel}`;
    }

    return 'https://www.google.com';

  }

  getChatSettings(): number {
    // ok yeah I know this is bad lol
    return this.layoutSvc.getChatHeight();
  }

}
