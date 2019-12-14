
/**
 * pair objects
 */
export class StreamPair {
  constructor(public channel: string, public service: string) { }

  //
  // methods that check for the service
  //

  public isTwitch(): boolean {
    return this.service === 'twitch'
      ? true
      : false;
  }

  public isMixer(): boolean {
    return this.service === 'mixer'
      ? true
      : false;
  }
}
