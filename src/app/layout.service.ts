import { Injectable, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatSettings } from './free-objects/settings-interface';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // state
  layoutState: LayoutState;


  constructor() {
    this.layoutState = new StandardLayout();
  }

  getChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  getPlayerHeight(): number {
    return this.layoutState.getPlayerHeight();
  }

  getPlayerWidth(): number {
    return this.layoutState.getPlayerWidth();
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
    return (window.innerHeight / 2) - 48;
  }
  getPlayerWidth(): number {
    return ((window.innerWidth - 375) / 2);
  }
}
