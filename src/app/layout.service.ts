import { Injectable, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatSettings } from './free-objects/settings-interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // state
  layoutState: LayoutState;
  additionalSize: number;

  // slider state


  constructor() {
    this.layoutState = new StandardLayout();
    this.additionalSize = 0;
  }

  getChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  getPlayerHeight(): number {
    return this.layoutState.getPlayerHeight() + this.additionalSize;
  }

  getPlayerWidth(): number {
    return this.layoutState.getPlayerWidth() + this.additionalSize;
  }
}

abstract class LayoutState {

  // this one is a little exaggerated so that the chat stays in the window right
  protected readonly tabHeight = 54; // 48 actual
  protected readonly headerHeight = 64; // 64 actual

  // these are calculated
  protected innerX: number;
  protected innerY: number;

  constructor() {
    // const x1 =
  }


  // find a 16x9 ratio within the available space
  // TODO: make this run on window resize
  setInner16x9() {

  }

  abstract getChatHeight(): number;
  abstract getPlayerHeight(): number;
  abstract getPlayerWidth(): number;
}

class StandardLayout extends LayoutState {
  getChatHeight(): number {
    return window.innerHeight - this.tabHeight;
  }


  getPlayerHeight(): number {
    return (window.innerHeight / 2) - 53;
    // return ((window.innerHeight - 64) / 2);
  }

  getPlayerWidth(): number {
    return ((window.innerWidth - 375) / 2);
    // return ((window.innerWidth - 350) / 2);
  }
}
