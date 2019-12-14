import { Injectable } from '@angular/core';
import { StreamListService } from './stream-list.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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

  scrollBarWidth: number;

  private deviceSettings;

  constructor(private streamSvc: StreamListService, private deviceSvc: DeviceDetectorService) {
    this.deviceSettings = this.deviceSvc.getDeviceInfo();
    // this is spaghet, make sure ot remove it here or in init
    this.resetLayout();
  }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    this.resetLayout();
  }

  resetLayout() {
    this.columns = 2;
    this.chatOpen = true;
    this.chatHeight = this.setChatHeight();
    this.setLayoutState();
    this.scrollBarWidth = this.layoutState.scrollBarWidth;
  }

  getChatHeight(): number {
    return this.layoutState.getChatHeight();
  }

  getPlayerHeight(): number {
    return this.layoutState.getPlayerHeight() / this.columns;
  }

  getPlayerWidth(): number {
    // if we have one column, adjust for the scrollbar
    if (this.columns === 1) {
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

  /**
   * sets the layout state based on stuff
   * TODO: we should make an object just dedicated to this
   */
  private setLayoutState() {
    // if mac os, we want a different layout state
    // this.layoutState = new StandardLayout(this.columns, this.chatOpen);

    if (this.deviceSettings.os === "Mac") {
      this.layoutState = new MacLayout(this.columns, this.chatOpen);
    }
    // better to be safe
    // ! IMPORTANT TODO:
    // TODO: make a toggle for changing the state incase scrollbar is messed up
    else {
      this.layoutState = new WindowsLayout(this.columns, this.chatOpen);
    }
  }
}

abstract class LayoutState {
  abstract readonly scrollBarWidth: number;

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

abstract class BasicLayoutState extends LayoutState {
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

class WindowsLayout extends BasicLayoutState {
  readonly scrollBarWidth = 20;
}

class MacLayout extends BasicLayoutState {
  readonly scrollBarWidth = 0;
}
