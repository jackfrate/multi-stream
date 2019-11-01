/**
 * interface for a stream player
 */

export interface StreamPlayer {
  // name of channel
  channelName: string;
  // the src for the iframe to embed the stream
  iframeSrc: string;
  // if the video is a vod or a stream
  isVod?: boolean;

  // iframe properties
  height?: string;
  width?: string;
  muted?: boolean;
}

export interface IFrameOptions {

}
