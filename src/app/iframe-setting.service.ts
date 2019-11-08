import { Injectable, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatSettings } from './free-objects/settings-interface';

@Injectable({
  providedIn: 'root'
})
export class IframeSettingService {

  pageHeight: number;
  @ViewChild('myFrame', { static: false }) frameRef: ElementRef;

  // IFRAME fields
  chatHeight: number;
  playerHeight: number;
  playerWidth: number;

  private readonly tabHeight = 54; // 48
  private readonly headerHeight = 70; // 64

  constructor() {
    this.chatHeight = window.innerHeight - this.tabHeight;
  }


  getChatHeight(): number {
    return this.chatHeight;
  }
}
