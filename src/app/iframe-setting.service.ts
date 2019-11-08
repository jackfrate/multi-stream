import { Injectable } from '@angular/core';
import { ChatSettings } from './free-objects/settings-interface';

@Injectable({
  providedIn: 'root'
})
export class IframeSettingService {

  // IFRAME fields
  chatHeight: number;
  videoHeight: number;
  videoWidth: number;

  constructor() { }


  getChatSettings(): ChatSettings {
    return { height: 700 };
  }
}
