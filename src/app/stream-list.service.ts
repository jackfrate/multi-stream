import { Injectable } from '@angular/core';
import { StreamPair } from './stream-container/stream-container.component';
import { MatDialogRef } from '@angular/material';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {

  streamSet: Set<StreamPair> = new Set(this.getDummyData());

  constructor(private urlSvc: UrlService) { }

  getStreamSet(): Set<StreamPair> {
    return this.streamSet;
  }

  addStream(stream: StreamPair): void {
    // check if stream is a link
    if (stream.channel.includes('twitch') && this.urlSvc.checkIfUrl(stream.channel)) {
      // check for twitch
      stream.channel = this.urlSvc.trimTwitchUrl(stream.channel);
    } else if (stream.channel.includes('mixer') && this.urlSvc.checkIfUrl(stream.channel)) {
      // check for mixer
      stream.channel = this.urlSvc.trimMixerUrl(stream.channel);
    }
    this.streamSet.add(stream);
  }

  removeStream(stream: StreamPair): void {
    this.streamSet.delete(stream);
  }

  getStreamServices(): string[] {
    return ['twitch', 'mixer'];
  }

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
}
