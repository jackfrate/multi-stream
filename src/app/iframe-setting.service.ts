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
  videoHeight: number;
  videoWidth: number;

  constructor() {

  }


  getChatSettings(): ChatSettings {
    return { height: 700 };
  }
}
