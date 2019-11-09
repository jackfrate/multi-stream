import { Injectable, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // state
  layoutState: LayoutState;

  chatOpen: boolean;

  // TODO: make this controllable
  columns: number;

  constructor(private chatSvc: ChatService) {
    // TODO: we need a better way to manage columns
    this.columns = 2;
    this.chatOpen = this.chatSvc.chatOpen;
    this.layoutState = new StandardLayout(this.columns, this.chatOpen);
  }

  getChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  getPlayerHeight(): number {
    return this.layoutState.getPlayerHeight() / this.columns;
  }

  getPlayerWidth(): number {
    return this.layoutState.getPlayerWidth() / this.columns;
  }

  // setters
  setColumns(cols: number) {
    this.columns = cols;
  }

  setChatOpen(open: boolean) {
    this.layoutState.setChatOpen(open);
  }

  // // TODO: make a reset state fn if needed
  // resetState(open: boolean) {
  //   this.layoutState = new StandardLayout(this.columns, open);
  // }
}

abstract class LayoutState {

  // this one is a little exaggerated so that the chat stays in the window right
  protected readonly tabHeight = 54; // 48 actual
  protected readonly headerHeight = 64; // 64 actual
  protected readonly chatWidth = 350;

  // these are calculated, get them for the size of the watch zone
  innerX: number;
  innerY: number;

  constructor(public columns: number, public chatOpen: boolean) {
    this.setInner16x9();
  }

  setChatOpen(open: boolean) {
    this.chatOpen = open;
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
    if (x2 >= y2) {
      this.innerX = x1;
      this.innerY = y2;
    }

    if (y2 > x2) {
      this.innerX = x2;
      this.innerY = y1;
    }

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
    // we don't use innerY because we just want to fill up height no matter what
    return window.innerHeight - this.tabHeight;
  }

  getPlayerWidth(): number {
    // return ((window.innerWidth - 375) / 2);
    console.log('innerx:');
    console.log(this.innerX);
    return this.innerX;
  }

  getPlayerHeight(): number {
    // return (window.innerHeight / 2) - 53;
    console.log('innery:');
    console.log(this.innerY);
    return this.innerY;
  }

}
