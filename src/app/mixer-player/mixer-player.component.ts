import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-mixer-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./mixer-player.component.scss']
})
export class MixerPlayerComponent implements StreamPlayer, OnInit {

  public static readonly mixerRoot = 'https://mixer.com/embed/player/';

  // things for the iframe
  iframeSrc: string;


  // input of the channel name
  @Input()
  channelName: string;


  constructor() { }

  static getIFrameSrc(channelName: string, options?: IFrameOptions): string {
    // TODO: add options processing
    return `${MixerPlayerComponent.mixerRoot}${channelName}${MixerPlayerComponent.makeOptionsString(options)}`;
  }

  // TODO: implement
  static makeOptionsString(options?: IFrameOptions): string {
    return '';
  }

  ngOnInit() {
  }

}

