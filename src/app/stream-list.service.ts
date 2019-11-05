import { Injectable } from '@angular/core';
import { StreamPair } from './stream-container/stream-container.component';
import { MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {

  streamSet: Set<StreamPair> = new Set(this.getDummyData());

  constructor() { }

  getStreamSet(): Set<StreamPair> {
    return this.streamSet;
  }

  addStream(stream: StreamPair): void {
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
