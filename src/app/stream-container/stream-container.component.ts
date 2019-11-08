import { Component, OnInit } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { StreamPair } from '../free-objects/stream-pair';
import { PlayerSettings } from '../free-objects/settings-interface';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  public readonly twitchSite: string = 'twitch';
  public readonly mixerSite: string = 'mixer';

  // map of streaming services, then a list of channels within them

  constructor(private streamListSvc: StreamListService, private chatSvc: ChatService) { }

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

  // TODO: make these use a state
  private getVideoHeight(): number {
    return (window.innerHeight / 2) - 50;
  }

  private getVideoWidth(): number {
    return ((window.innerWidth - 390) / 2);
  }

}
