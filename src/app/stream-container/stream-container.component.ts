import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  // map of streaming services, then a list of channels within them
  streamMap: Set<StreamPair>;

  constructor() { }

  ngOnInit() {
  }

  addStreamPair(streamPair: StreamPair) {
    this.streamMap.add(streamPair);
  }

  // removeStreamPair(streamPair: StreamPair) {
  //   this.streamMap.delete(streamPair);
  // }

}

/**
 * pair objects
 */
export class StreamPair {
  constructor(public readonly channel: string, public readonly service: string) { }
}

/**
 * stream identifier objects
 */
