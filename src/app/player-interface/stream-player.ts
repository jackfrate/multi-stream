/**
 * interface for a stream player
 */

// TODO: might have to make an abstract class
export interface StreamPlayer {
  // name of channel (will be an input)
  channelName: string;
  // the src for the iframe to embed the stream

  // getIFrameSrc(options?: IFrameOptions): string;
  // makeOptionsString(options?: IFrameOptions): string;
}

export interface IFrameOptions {

}
