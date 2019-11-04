import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-twitch-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./twitch-player.component.scss']
})
export class TwitchPlayerComponent implements StreamPlayer, OnInit {

  // public readonly twitchRoot = 'https://player.twitch.tv/';
  public static readonly twitchRoot = 'https://player.twitch.tv/?channel=';


  @Input() channelName: string;

  constructor() { }

  static getIFrameSrc(channelName: string, options?: IFrameOptions): string {
    // TODO: add options processing
    return `${TwitchPlayerComponent.twitchRoot}${channelName}${TwitchPlayerComponent.makeOptionsString(options)}`;
  }

  static makeOptionsString(options?: IFrameOptions): string {
    return '';
  }

  ngOnInit() {

  }

}
