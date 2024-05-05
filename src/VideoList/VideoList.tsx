import { Fragment } from 'react';
import ReactPlayer from 'react-player/youtube';
import { VStack } from '@chakra-ui/react';

// import { SimpleYouTube } from '../SimpleYouTube';
import PlayIcon from '../assets/play.svg?react';

type VideoListProps = {
  videos: string[];
};

const VideoList = ({ videos }: VideoListProps) => {
  return (
    <VStack>
      {videos.map((video) => (
        <Fragment key={video}>
          {/* <SimpleYouTube url={video} /> */}
          {/* <ReactPlayer url={video} width="100%" height="240px" /> */}
          <ReactPlayer
            light
            url={video}
            playIcon={<PlayIcon width="60" />}
            width="100%"
            height="240px"
            playing
          />
        </Fragment>
      ))}
    </VStack>
  );
};

export { VideoList };
