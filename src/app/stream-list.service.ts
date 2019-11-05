import { Injectable } from '@angular/core';
import { StreamPair } from './stream-container/stream-container.component';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {

  streamSet: Set<StreamPair> = new Set(this.getDummyData());

  constructor() { }

  getStreamData(): Set<StreamPair> {
    return this.streamSet;
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
