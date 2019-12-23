import { Injectable } from '@angular/core';
import { StreamListService } from './stream-list.service';

@Injectable({
  providedIn: 'root'
})
/**
 * all of the js you're not supposed to use in angular is
 * encapsulated in here.
 */
export class LayoutService {

  // state
  layoutState: LayoutState;

  chatOpen: boolean;

  columns: number;

  chatHeight: number;

  // TODO: if on MAC, don't do the ratio thing

  // readonly scrollBarWidth = 20;
  readonly scrollBarWidth = 20;

  constructor(private streamSvc: StreamListService) {
    this.resetLayout();
  }

  resetLayout() {
    this.columns = 1;
    this.layoutState = new StandardLayout(this.columns, this.chatOpen);
    this.chatOpen = true;
    this.chatHeight = this.setChatHeight();
  }

  getChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  getPlayerHeight(): number {
    return this.layoutState.getPlayerHeight() / this.columns;
  }

  getPlayerWidth(): number {
    // if we have one column, adjust for the scrollbar
    if (this.columns === 1 && this.chatOpen === false) {
      return (this.layoutState.getPlayerWidth()) - this.scrollBarWidth;
    }

    // if we have more streams than columns * 2, we gotta adjust for the scrollbar again
    if (this.streamSvc.getStreamSet().size > (this.columns * 2)) {
      return (this.layoutState.getPlayerWidth() - this.scrollBarWidth) / this.columns;
    }

    return (this.layoutState.getPlayerWidth() / this.columns);
  }

  setChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  // setters
  setColumns(cols: number) {
    this.columns = cols;
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }
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
  protected setInner16x9() {
    const x1 = this.widthAdjuster(window.innerWidth);
    const y1 = this.heightAdjuster(window.innerHeight);

    // BIG BRAIN RATIO MATH BOIS
    const x2 = ((16 * y1) / 9); // get the 16*9 x2 for y1
    const y2 = ((9 * x1) / 16); // get the 16*9 y2 for x1

    // now check which ones are gonna be inner x and y
    // (its the lowest of x2 and y2)
    // TODO: the prblmen happens here
    let debug: string;
    // need to add an and here
    if ((x2 >= y2)) {
      this.innerX = x1;
      this.innerY = y2;
      debug = 'using x1 and y2: x2 >= y2 WRONG';
    }

    if (y2 > x2) {
      this.innerX = x2;
      this.innerY = y1;
      debug = 'using x2 and y1: y2 > x2 CORRECT';
    }

    console.log(`x1: ${x1}, x2: ${x2} \n y1: ${y1}, y2: ${y2} \n ${debug}`);

  }

  // TODO: private method that will fix x and y dimentions (make this a real solution later)

  protected widthAdjuster(width: number): number {
    return this.chatOpen
      ? width - this.chatWidth
      : width;
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
    return this.innerX;
  }

  getPlayerHeight(): number {
    return this.innerY;
  }

}
