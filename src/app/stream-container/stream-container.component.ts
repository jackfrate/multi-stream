import { Component, OnInit } from '@angular/core';
import { StreamListService } from '../stream-list.service';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  public readonly twitchSite: string = 'twitch';
  public readonly mixerSite: string = 'mixer';

  // map of streaming services, then a list of channels within them

  constructor(private streamListSvc: StreamListService) { }

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
    if (pair.service === this.twitchSite) {
      return `https://player.twitch.tv/?channel=${pair.channel}`;
    }
    if (pair.service === this.mixerSite) {
      return `https://mixer.com/embed/player/${pair.channel}`;
    }
  }
}

/**
 * pair objects
 */
export class StreamPair {
  constructor(public readonly channel: string, public readonly service: string) { }
}
