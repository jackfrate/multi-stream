import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-select',
  templateUrl: './stream-select.component.html',
  styleUrls: ['./stream-select.component.scss']
})
export class StreamSelectComponent implements OnInit {

  readonly streamSites: string[] = ["Twitch", "Mixer"];

  constructor() { }

  ngOnInit() {
  }

}
