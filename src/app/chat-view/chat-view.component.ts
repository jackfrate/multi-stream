import { StreamPair } from '../free-objects/stream-pair';
import { Component } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { IframeSettingService } from '../iframe-setting.service';
import { ChatSettings } from '../free-objects/settings-interface';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent {

  private streamList: Set<StreamPair>;

  constructor(private streamListSvc: StreamListService, private frameSvc: IframeSettingService) {
    this.streamList = this.streamListSvc.getStreamSet();
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
    return this.frameSvc.getChatSettings();
  }

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
}
