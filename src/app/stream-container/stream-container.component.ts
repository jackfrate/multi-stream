import { Component, OnInit, ViewChild } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { StreamPair } from '../free-objects/stream-pair';
import { PlayerSettings } from '../free-objects/settings-interface';
import { ChatService } from '../chat.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  public readonly twitchSite: string = 'twitch';
  public readonly mixerSite: string = 'mixer';

  // map of streaming services, then a list of channels within them
  @ViewChild('sContainer', { static: false }) streamContainer;

  constructor(private streamListSvc: StreamListService, private layoutSvc: LayoutService) { }

  ngOnInit() {
  }

  getStreamSet(): Set<StreamPair> {
    return this.streamListSvc.getStreamSet();
  }

  addStreamPair(streamPair: StreamPair) {
    this.streamListSvc.addStream(streamPair);
  }

  removeStreamPair(streamPair: StreamPair) {
    this.streamListSvc.removeStream(streamPair);
  }

  //
  // size methods
  //

  getVideoHeight(): number {
    return this.layoutSvc.getPlayerHeight();
  }

  getVideoWidth(): number {
    return this.layoutSvc.getPlayerWidth();
  }


  // TODO: make this use a map of pair services and urls to return
  getStreamSrc(pair: StreamPair): string {
    if (pair.isTwitch()) {
      return `https://player.twitch.tv/?channel=${pair.channel}`;
    }
    if (pair.isMixer()) {
      return `https://mixer.com/embed/player/${pair.channel}`;
    }
  }

  // TODO: move all this shit to a service

  getPlayerSettings(): PlayerSettings {
    return { videoHeight: this.getVideoHeight(), videoWidth: this.getVideoWidth() };
  }


}
