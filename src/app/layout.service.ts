import { Injectable, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // state
  layoutState: LayoutState;
  additionalSize: number;

  chatOpen: boolean;

  constructor(private chatSvc: ChatService) {
    this.chatOpen = this.chatSvc.chatOpen;
    this.layoutState = new StandardLayout(this.chatOpen);
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
  protected readonly chatWidth = 350;

  // these are calculated
  protected innerX: number;
  protected innerY: number;

  constructor(public chatOpen: boolean) {

  }

  // find a 16x9 ratio within the available space
  // TODO: make this run on window resize
  protected setInner16x9() {
    const x1 = this.widthAdjuster(window.innerWidth);
    const y1 = this.heightAdjuster(window.innerHeight);

    // BIG BRAIN RATIO MATH BOIS
    const x2 = ((16 * y1) / 9); // get the 16*9 x2 for y1
    const y2 = ((9 * x1) / 16); // get the 16*9 y2 for x1



    // now check which ones are gonna be inner x and y
    // (its the lowest of x2 and y2)

  }

  protected widthAdjuster(totalWidth: number): number {
    return this.chatOpen
      ? totalWidth - this.chatWidth
      : totalWidth;
  }

  protected heightAdjuster(totalHeight: number): number {
    return totalHeight - this.headerHeight;
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
