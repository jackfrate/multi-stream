import { Injectable } from '@angular/core';
import { StreamPair } from './free-objects/stream-pair';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatTabs: Map<string, StreamPair>;
  private chatOpen: boolean;

  constructor() {
    this.chatTabs = new Map<string, StreamPair>();
    // TODO: will hopefully be a part of the layout svc
    this.chatOpen = true;
  }

  isChatOpen(): boolean {
    return this.chatOpen;
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }

  // getter so nothing can fuck with chat tabs
  getChatTabs(): Map<string, StreamPair> {
    return this.chatTabs;
  }

  addChatTab(pair: StreamPair) {
    // make sure the name isn't in use,
    if (this.chatTabs.has(pair.channel)) {
      let nameAppend = 1;
      let newName = `${pair.channel}${nameAppend}`
      // keep checking until we have a valid name
      while (this.chatTabs.has(newName)) {
        // will look like: 'streamName (n)'
        newName = `${pair.channel} (${nameAppend})`
        nameAppend++;
      }
      this.chatTabs.set(newName, pair);
      // ok we done checking now
    }
    // if we are good, just set it like normal
    this.chatTabs.set(pair.channel, pair);
  }

  // we get tab name from the template
  // its the key in the ngFor loop
  removeChatTab(tabName: string) {
    this.chatTabs.delete(tabName);
  }

  getChatUrl(pair: StreamPair): string {
    if (pair.isTwitch()) {
      return this.channelToChatTwitch(pair);
    }
    if (pair.isMixer()) {
      return this.channelToChatMixer(pair);
    }

  }

  private channelToChatTwitch(pair: StreamPair): string {
    return `https://www.twitch.tv/embed/${pair.channel}/chat`;
  };

  private channelToChatMixer(pair: StreamPair): string {
    return `https://mixer.com/embed/chat/${pair.channel}`;
  }
}
