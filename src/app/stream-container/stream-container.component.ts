import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamListService } from '../stream-list.service';
import { StreamPair } from '../free-objects/stream-pair';
import { PlayerSettings } from '../free-objects/settings-interface';
import { LayoutService } from '../layout.service';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit, OnDestroy {

  public readonly twitchSite: string = 'twitch';
  public readonly mixerSite: string = 'mixer';

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private streamListSvc: StreamListService, private layoutSvc: LayoutService) { }

  ngOnInit() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.layoutSvc.resetLayout();
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  getStreamSet(): Set<StreamPair> {
    return this.streamListSvc.getStreamSet();
  }

  addStreamPair(streamPair: StreamPair) {
    this.streamListSvc.addStream(streamPair);
  }

  removeStreamPair(streamPair: StreamPair) {
    this.streamListSvc.removeStream(streamPair);
  }

  //
  // size methods
  //

  getVideoHeight(): number {
    return this.layoutSvc.getPlayerHeight();
  }

  getVideoWidth(): number {
    return this.layoutSvc.getPlayerWidth();
  }


  // TODO: make this use a msap of pair services and urls to return
  getStreamSrc(pair: StreamPair): string {
    if (pair.isTwitch()) {
      return `https://player.twitch.tv/?channel=${pair.channel}`;
    }
    if (pair.isMixer()) {
      return `https://mixer.com/embed/player/${pair.channel}`;
    }
  }

  getPlayerSettings(): PlayerSettings {
    return { videoHeight: this.getVideoHeight(), videoWidth: this.getVideoWidth() };
  }

}
