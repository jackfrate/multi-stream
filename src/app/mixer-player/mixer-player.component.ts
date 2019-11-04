import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-mixer-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./mixer-player.component.scss']
})
export class MixerPlayerComponent implements StreamPlayer, OnInit {

  public readonly mixerRoot = 'https://mixer.com/embed/player/';

  // things for the iframe
  iframeSrc: string;


  // input of the channel name
  @Input()
  channelName: string;


  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {

  }

  getIFrameSrc(options?: IFrameOptions): string {
    // TODO: add options processing
    return `${this.mixerRoot}${this.channelName}${this.makeOptionsString(options)}`;
  }

  // TODO: implement
  makeOptionsString(options?: IFrameOptions): string {
    return '';
  }
}

