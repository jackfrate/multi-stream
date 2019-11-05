import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  public readonly twitchSite: string = 'twitch';
  public readonly mixerSite: string = 'mixer';


  // map of streaming services, then a list of channels within them
  streamSet: Set<StreamPair> = new Set(this.getDummyData());

  constructor() {]}

  ngOnInit() {
  }

  // addStreamPair(streamPair: StreamPair) {
  //   this.streamSet.add(streamPair);
  // }

  // removeStreamPair(streamPair: StreamPair) {
  //   this.streamMap.delete(streamPair);
  // }

  private getDummyData(): StreamPair[] {
    return [
      {
        channel: 'gladd',
        service: 'twitch'
      },
      {
        channel: 'c9sneaky',
        service: 'twitch'
      },
      {
        channel: 'shroud',
        service: 'mixer'
      }
    ];
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
