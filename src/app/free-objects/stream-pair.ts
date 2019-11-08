
/**
 * pair objects
 */
export class StreamPair {
  constructor(public channel: string, public service: string) { }

  //
  // methods that check for the service
  // TODO: should change all the checks to use these
  //

  isTwitch(): boolean {
    return this.service === 'twitch'
      ? true
      : false;
  }

  isMixer(): boolean {
    return this.service === 'mixer'
      ? true
      : false;
  }
}
