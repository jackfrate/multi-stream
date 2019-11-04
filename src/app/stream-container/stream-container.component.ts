import { Component, OnInit } from '@angular/core';
import { TwitchPlayerComponent } from '../twitch-player/twitch-player.component';

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

  constructor() {
    console.log('YOOOO');
    this.streamSet.forEach((sPair: StreamPair) => {
      console.log(`${sPair.channel} + ${sPair.service}`);
    });
  }

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
    ]
  }

  getStreamSrc(pair: StreamPair): string {
    if (pair.service === 'twitch') {
      return `https://player.twitch.tv/?channel=${pair.channel}`;
    }
    if (pair.service === 'mixer') {
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
