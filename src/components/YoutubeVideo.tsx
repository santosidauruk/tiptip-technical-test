import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props extends YouTubeProps {
  videoId: string;
}

const YoutubeVideo = (props: Props) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube opts={opts} onReady={onPlayerReady} {...props} />;
};

export default YoutubeVideo;
