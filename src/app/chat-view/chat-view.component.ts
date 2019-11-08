import { StreamPair } from '../free-objects/stream-pair';
import { Component } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { IframeSettingService } from '../iframe-setting.service';
import { ChatSettings, PlayerSettings } from '../free-objects/settings-interface';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  private streamList: Set<StreamPair>;

  chatHeight: number;
  playerHeight: number;
  playerWidth: number;

  constructor(private streamListSvc: StreamListService, private frameSvc: IframeSettingService) {
    this.streamList = this.streamListSvc.getStreamSet();
    this.chatHeight = frameSvc.getChatHeight();
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
    else {
      return 'https://www.google.com';
    }
  }

  getChatSettings(): ChatSettings {
    // ok yeah I know this is bad lol
    return { height: this.chatHeight };
  }


}
