import { Component, OnInit } from '@angular/core';
import { StreamPair } from '../stream-container/stream-container.component';

@Component({
  selector: 'app-stream-select',
  templateUrl: './stream-select.component.html',
  styleUrls: ['./stream-select.component.scss']
})
export class StreamSelectComponent implements OnInit {

  // TODO: maybe get these in a service
  readonly siteList: string[] = ['twitch', 'mixer'];
  open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  switchPanel() {
    this.open = !this.open;
  }

  makeStreamPair(channelName: string, site: string): StreamPair {
    return {
      channel: channelName,
      service: site
    }
  }

}
