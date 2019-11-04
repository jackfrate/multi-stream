import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-twitch-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./twitch-player.component.scss']
})
export class TwitchPlayerComponent implements StreamPlayer, OnInit {

  public static readonly twitchRoot = 'https://player.twitch.tv/';


  @Input()
  channelName: string;

  constructor() {

  }

  ngOnInit() {
    console.log(this.getIFrameSrc());
  }

  getIFrameSrc(options?: IFrameOptions): string {
    // TODO: add options processing
    return `${TwitchPlayerComponent.twitchRoot}${this.channelName}${this.makeOptionsString(options)}`;
  }

  makeOptionsString(options?: IFrameOptions): string {
    return '';
  }

}
