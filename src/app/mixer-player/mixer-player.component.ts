import { Component, OnInit, Input } from '@angular/core';
import { StreamPlayer, IFrameOptions } from '../player-interface/stream-player';

@Component({
  selector: 'app-mixer-player',
  templateUrl: '../player-interface/standard-player.component.html',
  styleUrls: ['./mixer-player.component.scss']
})
export class MixerPlayerComponent implements StreamPlayer, OnInit {

  // things for the iframe
  iframeSrc: string;
  isVod?: boolean;
  height?: string;
  width?: string;
  muted?: boolean;


  // input of the channel name
  @Input()
  channelName: string;

  public static readonly mixerRoot = "https://mixer.com/embed/player/";

  constructor() { }

  ngOnInit() {
    this.createIFrameSrc();
  }

  private createIFrameSrc(options?: IFrameOptions): void {
    // TODO: add options processing
    this.iframeSrc = `${MixerPlayerComponent.mixerRoot}${this.channelName}${this.makeOptionsString(options)}`;
  }

  // TODO: implement
  private makeOptionsString(options?: IFrameOptions): string {
    return '';
  }
}

