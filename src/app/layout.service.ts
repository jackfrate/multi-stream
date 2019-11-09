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

  protected readonly tabHeight = 54; // 48
  protected readonly headerHeight = 70; // 64

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
