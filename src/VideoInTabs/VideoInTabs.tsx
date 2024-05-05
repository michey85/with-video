import { AspectRatio, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

import PlayIcon from '../assets/play.svg?react';

import { TabMenu } from '../TabMenu';
// import { SimpleYouTube } from '../SimpleYouTube';

type VideoInTabsProps = {
  videos: string[];
  isOpen: boolean;
};

const VideoInTabs = ({ videos, isOpen }: VideoInTabsProps) => {
  return (
    <Tabs isLazy>
      <TabMenu />

      <TabPanels>
        {videos.map((video) => (
          <TabPanel key={video}>
            <AspectRatio ratio={16 / 9}>
              {isOpen ? (
                <>
                  {/* <SimpleYouTube url={video} /> */}
                  {/* <ReactPlayer url={video} width="100%" height="100%" /> */}
                  <ReactPlayer
                    light
                    url={video}
                    playIcon={<PlayIcon width="60" />}
                    width="100%"
                    height="100%"
                    playing
                  />
                </>
              ) : (
                <div />
              )}
            </AspectRatio>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export { VideoInTabs };
