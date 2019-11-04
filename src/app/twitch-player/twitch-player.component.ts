import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-twitch-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./twitch-player.component.scss']
})
export class TwitchPlayerComponent implements StreamPlayer, OnInit {

  // public readonly twitchRoot = 'https://player.twitch.tv/';
  public readonly twitchRoot = 'https://player.twitch.tv/?channel=';


  @Input() channelName: string;

  constructor() { }

  ngOnInit() {
    console.log(this.getIFrameSrc());
  }

  ngOnChanges() { }

  getIFrameSrc(options?: IFrameOptions): string {
    // TODO: add options processing
    return `${this.twitchRoot}${this.channelName}${this.makeOptionsString(options)}`;
  }

  makeOptionsString(options?: IFrameOptions): string {
    return '';
  }

}
