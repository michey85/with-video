import { useState } from 'react';
import { AspectRatio, Heading, Tabs, TabPanels, TabPanel, Container } from '@chakra-ui/react';
import ReactPlayer from 'react-player/youtube';

import PlayIcon from './assets/play.svg?react';
import { TabMenu } from './TabMenu';
import { Spoiler } from './Spoiler';

const videos: string[] = [
  'https://youtu.be/g6dWAhuO4fw?si=VIGph1gFfBypkTle',
  'https://youtu.be/qLoHEtwNuCE?si=kZzt8fuJgB9YRoQw',
  'https://youtu.be/lUf8qC_xFHo?si=HQJTowvKwdKOgpud',
];

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container maxW="container.lg" pt={4} minH="100dvh">
      <Heading as="h1" size="2xl" textAlign="center" mb={4}>
        React Video
      </Heading>

      <Spoiler title="Videos" isOpen={isOpen} onChange={() => setOpen(!isOpen)}>
        <Tabs>
          <TabMenu />

          <TabPanels>
            {videos.map((video) => (
              <TabPanel key={video}>
                <AspectRatio ratio={16 / 9}>
                  {isOpen ? (
                    <ReactPlayer
                      light
                      url={video}
                      playIcon={<PlayIcon width="60" />}
                      width="100%"
                      height="100%"
                      playing
                    />
                  ) : (
                    <div />
                  )}
                </AspectRatio>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Spoiler>
    </Container>
  );
}

export default App;
