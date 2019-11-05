import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  checkIfUrl(linkInQuestion: string): boolean {
    // if the link is not a valid url return false
    if (!linkInQuestion.startsWith('https')) {
      return false;
    }
    return true;
  }

  trimTwitchUrl(link: string): string {
    let streamName: string;
    if (link.includes('twitch.tv')) {
      // get rid of the beginning
      streamName = link.replace('https://www.twitch.tv/', '');
      // get rid of the query params
      streamName = streamName.split('?')[0];

      return streamName;
    }
    return link;
  }

  trimMixerUrl(link: string): string {
    let streamName: string;
    if (link.includes('mixer.com')) {
      // get rid of the beginning
      streamName = link.replace('https://mixer.com/', '');
      // get rid of the query params
      streamName = streamName.split('?')[0];
      // get rid of the end
      streamName = streamName.split('/')[0];
    }
    return link;
  }
}
